const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
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

const RESUME_BUCKET = process.env.RESUME_BUCKET;
const CLOUDFRONT_DOMAIN = process.env.CLOUDFRONT_DOMAIN;

//Handler for generating a pre-signed S3 upload URL
async function getUploadUrlHandler(event) {
  try {
    const { fileName, fileType } = JSON.parse(event.body);
    if (!fileName || !fileType) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'fileName and fileType are required' }),
      };
    }
    const fileKey = `resumes/${uuidv4()}-${fileName}`;
    const command = new PutObjectCommand({
      Bucket: RESUME_BUCKET,
      Key: fileKey,
      ContentType: fileType,
    });
    const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 300 });

    // Use CloudFront if available, otherwise S3 URL
    const fileUrl = CLOUDFRONT_DOMAIN
      ? `https://${CLOUDFRONT_DOMAIN}/resumes/${fileKey.split('/')[1]}`
      : `https://${RESUME_BUCKET}.s3.amazonaws.com/${fileKey}`;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ uploadUrl: presignedUrl, fileUrl }),
    };
  } catch (e) {
    console.error('Error generating pre-signed URL:', e);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Failed to generate upload URL' }),
    };
  }
}

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

    // Optionally include resumeUrl if provided
    if (contact.resumeUrl) {
      contactItem.resumeUrl = contact.resumeUrl;
    }

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

async function getDownloadUrl(fileKey) {
  const command = new GetObjectCommand({
    Bucket: process.env.RESUME_BUCKET,
    Key: fileKey,
  });
  return await getSignedUrl(s3, command, { expiresIn: 300 }); // 5 minutes
}

async function getDownloadUrlHandler(event) {
  try {
    const { fileKey } = JSON.parse(event.body);
    if (!fileKey) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'fileKey is required' }),
      };
    }
    const presignedUrl = await getDownloadUrl(fileKey);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ downloadUrl: presignedUrl }),
    };
  } catch (e) {
    console.error('Error generating download URL:', e);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Failed to generate download URL' }),
    };
  }
}

// Main Lambda handler
exports.handler = async (event) => {
  const path = event.path || '';
  console.log('Received request for path:', path);

  if (path.endsWith('/api/get-upload-url')) {
    return await getUploadUrlHandler(event);
  } else if (path === '/api/submit-contact') {
    return await submitContactHandler(event);
  } else if (path.endsWith('/api/get-download-url')) {
    return await getDownloadUrlHandler(event);
  } else {
    return {
      statusCode: 404,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Not found' }),
    };
  }
};