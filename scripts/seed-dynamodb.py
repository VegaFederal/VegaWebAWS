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

response = table.scan(Limit=1)
if response['Count'] > 0:
    print(f"Table {TABLE_NAME} already has data, skipping seed.")
    sys.exit(0)

with open('src/react-files/routes/Team_members.json') as f:
    members = json.load(f)

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
