import { Buffer } from 'node:buffer';

import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import type { S3Handler } from 'aws-lambda';
import { getTextExtractor } from 'office-text-extractor'

import { env } from "$amplify/env/on-upload-handlers";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../data/resource';
import { createCvTexts } from "../graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.GRAPHQL_API, // set in .env and via dashboard on prod, or Find out how to get from env.AMPLIFY_DATA_GRAPHQL_ENDPOINT
        region: env.AWS_REGION,
        defaultAuthMode: "lambda",
      },
    },
  }
);


const client = generateClient<Schema>({ authMode: "lambda", authToken: "custom-authorized" });
const s3 = new S3Client({ region: env.AWS_REGION });

export const handler: S3Handler = async (event): Promise<void> => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
  const params = {
    Bucket: bucket,
    Key: key,
  };
  try {
    const response = await s3.send(new GetObjectCommand(params));
    if (!response.Body) {
      throw new Error('No body in response getting s3 object');
    }
    
    const fileBuffers = await response.Body.transformToByteArray()
    const extractor = getTextExtractor()
    const text = await extractor.extractText({ input: Buffer.from(fileBuffers), type: 'buffer' })

    await client.graphql({
      query: createCvTexts,
      variables: { input: { text, file: key }},
    });
  } catch (err) {
    console.error(err);
  }
};
