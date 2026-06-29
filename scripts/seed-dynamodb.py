import json
import boto3
import sys
import os

TABLE_NAME = os.environ.get('TABLE_NAME')
REGION = os.environ.get('AWS_REGION', 'us-east-1')
BUCKET_NAME = os.environ.get('BUCKET_NAME')

if not TABLE_NAME:
    print("ERROR: TABLE_NAME environment variable not set")
    sys.exit(1)

if not BUCKET_NAME:
    print("ERROR: BUCKET_NAME environment variable not set")
    sys.exit(1)

s3 = boto3.client('s3', region_name=REGION)
dynamodb = boto3.resource('dynamodb', region_name=REGION)
table = dynamodb.Table(TABLE_NAME)

with open('src/react-files/routes/Team_members.json') as f:
    members = json.load(f)

order_by_id = {str(member['id']): member['memberOrder'] for member in members}


def scan_all_items():
    items = []
    response = table.scan()
    items.extend(response['Items'])
    while 'LastEvaluatedKey' in response:
        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        items.extend(response['Items'])
    return items


def backfill_member_order():
    updated = 0
    for item in scan_all_items():
        if 'memberOrder' in item:
            continue
        member_id = item['id']
        if member_id not in order_by_id:
            print(f"Skipping {member_id}: no memberOrder in JSON")
            continue
        table.update_item(
            Key={'id': member_id},
            UpdateExpression='SET memberOrder = :mo',
            ExpressionAttributeValues={':mo': order_by_id[member_id]}
        )
        print(f"Backfilled memberOrder for {item.get('name', member_id)}")
        updated += 1
    print(f"Backfill complete. {updated} record(s) updated.")
    return updated


response = table.scan(Limit=1)
if response['Count'] > 0:
    print(f"Table {TABLE_NAME} already has data, skipping full seed.")
    backfill_member_order()
    sys.exit(0)

# Bootstrap empty table: upload images then insert records
image_map = {}
assets_dir = 'src/react-files/assets/About_us'
for file in os.listdir(assets_dir):
    s3.upload_file(f'{assets_dir}/{file}', BUCKET_NAME, f'About_us/{file}')
    name_key = os.path.splitext(file)[0].lower()
    image_map[name_key] = f'https://{BUCKET_NAME}.s3.amazonaws.com/About_us/{file}'
    print(f"Uploaded {file}")

for member in members:
    image_key = member['image'].lower()
    veteran_key = member.get('veteranLogo', '').lower() if member.get('veteranLogo') else None

    table.put_item(Item={
        'id': str(member['id']),
        'memberOrder': member['memberOrder'],
        'name': member['name'],
        'title': member['title'],
        'image': image_map.get(image_key, ''),
        'veteranLogo': image_map.get(veteran_key, None) if veteran_key else None,
        'veteranLogoSize': member.get('veteranLogoSize'),
        'details': member['details']
    })
    print(f"Added: {member['name']}")

print(f"Seed complete. {len(members)} records added.")
