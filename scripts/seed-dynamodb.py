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

# Map every local asset file to its URL in the shared assets bucket.
assets_dir = 'src/react-files/assets/About_us'
local_files = os.listdir(assets_dir)
image_map = {}
for file in local_files:
    name_key = os.path.splitext(file)[0].lower()
    image_map[name_key] = f'https://{BUCKET_NAME}.s3.amazonaws.com/About_us/{file}'

# Populate the assets bucket only when it is empty.
existing_objects = s3.list_objects_v2(Bucket=BUCKET_NAME, MaxKeys=1)
if existing_objects.get('KeyCount', 0) > 0:
    print(f"Bucket {BUCKET_NAME} already has objects, skipping image upload.")
else:
    print(f"Bucket {BUCKET_NAME} is empty, uploading images...")
    for file in local_files:
        s3.upload_file(f'{assets_dir}/{file}', BUCKET_NAME, f'About_us/{file}')
        print(f"Uploaded {file}")

# Populate the table only when it is empty.
response = table.scan(Limit=1)
if response['Count'] > 0:
    print(f"Table {TABLE_NAME} already has data, skipping table seed.")
    sys.exit(0)

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
