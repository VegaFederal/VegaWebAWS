const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { v4: uuidv4 } = require('uuid');

// Configure AWS SDK v3
const dynamoClient = new DynamoDBClient({});
const dynamodb = DynamoDBDocumentClient.from(dynamoClient);
const s3 = new S3Client({});

const CONTACTS_TABLE = process.env.CONTACTS_TABLE;
const ENVIRONMENT = process.env.ENVIRONMENT;

console.log('ENVIRONMENT:', ENVIRONMENT);
console.log('CONTACTS_TABLE:', CONTACTS_TABLE);

// const RESUME_BUCKET = process.env.RESUME_BUCKET;
// const CLOUDFRONT_DOMAIN = process.env.CLOUDFRONT_DOMAIN;

// Handler for generating a pre-signed S3 upload URL
// async function getUploadUrlHandler(event) {
//   try {
//     const body = JSON.parse(event.body);
//     const fileName = body.fileName;
//     const fileType = body.fileType;

//     if (!fileName || !fileType) {
//       return {
//         statusCode: 400,
//         headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
//         body: JSON.stringify({ error: 'fileName and fileType are required' }),
//       };
//     }

//     const fileKey = `resumes/${uuidv4()}-${fileName}`;
//     const command = new PutObjectCommand({
//       Bucket: RESUME_BUCKET,
//       Key: fileKey,
//       ContentType: fileType,
//     });
//     const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 300 });

//     const fileUrl = `https://${CLOUDFRONT_DOMAIN}/${fileKey}`;

//     return {
//       statusCode: 200,
//       headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
//       body: JSON.stringify({ uploadUrl: presignedUrl, fileUrl }),
//     };
//   } catch (e) {
//     console.error('Error generating pre-signed URL:', e);
//     return {
//       statusCode: 500,
//       headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
//       body: JSON.stringify({ error: 'Failed to generate upload URL' }),
//     };
//   }
// }

// Handler for saving contact info to DynamoDB
async function submitContactHandler(event) {
  try {
    const contact = JSON.parse(event.body);
    console.log('Received contact:', contact);

    // Validate required fields
    if (!contact.firstName || !contact.lastName || !contact.email) {
      console.error('Missing required fields:', contact);
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'First name, last name, and email are required' }),
      };
    }

    // Create contact item
    const contactId = uuidv4();
    const contactItem = {
      id: contactId,
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      createdAt: new Date().toISOString(),
    };

    // Save to DynamoDB
    console.log('Saving contact to DynamoDB:', contactItem);
    await dynamodb.send(new PutCommand({
      TableName: CONTACTS_TABLE,
      Item: contactItem,
    }));

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: 'Contact information saved successfully', contactId }),
    };
  } catch (e) {
    console.error('Error saving contact:', e);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: `Failed to save contact information: ${e.message}` }),
    };
  }
}

// Main Lambda handler
exports.handler = async (event) => {
  const path = event.path || '';
  console.log('Received request for path:', path);
  //if (path === '/' + ENVIRONMENT + '/api/get-upload-url') {
    // return await getUploadUrlHandler(event);
  //} else 
  if (path === '/api/submit-contact') {
    console.log('Received request for submit-contact');
    return await submitContactHandler(event);
  } else {
    return {
      statusCode: 404,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Not found' }),
    };
  }
};