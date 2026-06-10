import json
import boto3
import os
import sys

TABLE_NAME = os.environ.get('TABLE_NAME')
REGION = os.environ.get('AWS_REGION', 'us-east-1')

if not TABLE_NAME:
    print("ERROR: TABLE_NAME environment variable not set")
    sys.exit(1)

dynamodb = boto3.resource('dynamodb', region_name=REGION)
table = dynamodb.Table(TABLE_NAME)

with open('src/react-files/routes/Team_members.json') as f:
    members = json.load(f)

order_map = {str(m['id']): m['memberOrder'] for m in members}

updated = 0
skipped = 0

for member_id, member_order in order_map.items():
    response = table.get_item(Key={'id': member_id})
    item = response.get('Item')

    if not item:
        print(f"WARNING: id={member_id} not found in table, skipping.")
        skipped += 1
        continue

    if 'memberOrder' in item:
        print(f"id={member_id} already has memberOrder={item['memberOrder']}, skipping.")
        skipped += 1
        continue

    table.update_item(
        Key={'id': member_id},
        UpdateExpression='SET memberOrder = :val',
        ExpressionAttributeValues={':val': member_order}
    )
    print(f"Updated id={member_id} -> memberOrder={member_order}")
    updated += 1

print(f"\nDone. {updated} records updated, {skipped} skipped.")
