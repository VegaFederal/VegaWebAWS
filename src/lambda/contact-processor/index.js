const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      email: data.email,
      name: data.name,
      job: data.job,
      message: data.message,
      submittedAt: new Date().toISOString()
    }
  };

  await dynamo.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Application submitted!' })
  };
};