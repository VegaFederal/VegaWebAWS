import json
import boto3
import os
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])
ALLOWED_ORIGIN = os.environ.get('ALLOWED_ORIGIN', '')


def decimal_to_native(obj):
    if isinstance(obj, list):
        return [decimal_to_native(i) for i in obj]
    if isinstance(obj, dict):
        return {k: decimal_to_native(v) for k, v in obj.items()}
    if isinstance(obj, Decimal):
        return int(obj) if obj % 1 == 0 else float(obj)
    return obj


def handler(event, context):
    headers = event.get('headers', {})
    origin = headers.get('origin', '')
    referer = headers.get('referer', '')

    allowed = not ALLOWED_ORIGIN or origin == ALLOWED_ORIGIN or referer.startswith(ALLOWED_ORIGIN)
    cors_origin = origin if allowed and origin else ALLOWED_ORIGIN

    if not allowed:
        return {
            "statusCode": 403,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            },
            "body": json.dumps({"error": "Forbidden"})
        }

    method = event['requestContext']['http']['method']

    try:
        if method == 'GET':
            return get_team_members(cors_origin)
        else:
            return {
                "statusCode": 405,
                "headers": {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": cors_origin,
                },
                "body": json.dumps({"error": "Method not allowed"})
            }
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": cors_origin,
            },
            "body": json.dumps({"error": str(e)})
        }


def get_team_members(cors_origin):
    response = table.scan()
    members = sorted(response['Items'], key=lambda x: x.get('memberOrder', 0))
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": cors_origin,
        },
        "body": json.dumps(decimal_to_native(members))
    }