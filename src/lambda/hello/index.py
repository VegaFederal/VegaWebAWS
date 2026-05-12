import json
import boto3
import os

# create a dynamodb resource
dynamodb = boto3.resource('dynamodb')
# create a table object
table = dynamodb.Table(os.environ['TABLE_NAME'])


def handler(event, context):
    method = event['requestContext']['http']['method'] # Grabs the method of the request POST, PUT, DELETE, GET
    body = event.get('body', '{}') # grabs the body of the request if it exists, otherwise returns an empty JSON object
    path_params = event.get('pathParameters') or {} # grabs the path parameters of the request if it exists, otherwise returns an empty JSON object. POST wont have params.
    if method == 'POST': # Used for creating something new. Sending data to the server.
        data = json.loads(body) # converts the body to a JSON object, parses the raw string into a dict.
        # here is where you would do something with the data, like save it to a database.
        return { # this is the response we get from the clint. right now it will echo back the data we sent.
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps(data)   # body must always be a string, this line converts the dict to a string to be sent back.
        }
    elif method == 'PUT': # this method is the same as the post but will have an id in the path to signify which record to update.
        data = json.loads(body)
        # here is where you would do something with the data, like update it in a database.
        id = path_params.get('id') # grabs the id from the path parameters.
        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"id": id, "updatedData": data})
        }
    elif method == 'DELETE':
        id = path_params.get('id') # grabs the id from the path parameters to know which record to delete.
        # here is where you would do something with the data, like delete it from a database.
        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"deletedId": id})
        }
    elif method == 'GET':   # this method is used to get a record from the database.
        # id = path_params.get('id') # grabs the id from the path parameters to know which record to get.
        response = table.scan() # removed id because we are getting all records.
        items = response['Items']
        # here is where you would do something with the data, like get it from a database.
        return {
            "statusCode": 200, 
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps(items)
        }

    else: # else return an error.
        return {
            "statusCode": 405,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"error": "Method not allowed"})
        }