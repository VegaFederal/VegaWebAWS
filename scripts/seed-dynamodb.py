import json
import boto3
import sys
import os

TABLE_NAME = os.environ.get('TABLE_NAME')
REGION = os.environ.get('AWS_REGION', 'us-east-1')

if not TABLE_NAME:
    print("ERROR: TABLE_NAME environment variable not set")
    sys.exit(1)

dynamodb = boto3.resource('dynamodb', region_name=REGION)
table = dynamodb.Table(TABLE_NAME)

# check if table already has data — if so, skip seeding
response = table.scan(Limit=1)
if response['Count'] > 0:
    print(f"Table {TABLE_NAME} already has data, skipping seed.")
    sys.exit(0)

# load the JSON file
with open('src/react-files/routes/Team_members.json') as f:
    members = json.load(f)

# insert each member
for member in members:
    table.put_item(Item={
        'id': str(member['id']),
        'name': member['name'],
        'title': member['title'],
        'image': member['image'],
        'veteranLogo': member.get('veteranLogo'),
        'veteranLogoSize': member.get('veteranLogoSize'),
        'details': member['details']
    })
    print(f"Added: {member['name']}")

print(f"Seed complete. {len(members)} records added.")