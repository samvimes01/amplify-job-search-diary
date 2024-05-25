import { Buffer } from 'node:buffer';

import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import type { S3Handler } from 'aws-lambda';
import { getTextExtractor } from 'office-text-extractor';

import { env } from "$amplify/env/onCvUploadHandler";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../data/resource';
import { createCvTexts } from "../../graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);


const client = generateClient<Schema>({ authMode: "iam" });
const s3 = new S3Client({ region: env.AWS_REGION });

export const handler: S3Handler = async (event): Promise<void> => {
  const Bucket = event.Records[0].s3.bucket.name;
  const Key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));

  try {
    const response = await s3.send(new GetObjectCommand({ Bucket, Key }));
    if (!response.Body) {
      throw new Error('No body in response getting s3 object');
    }

    const fileBuffers = await response.Body.transformToByteArray()
    const text = await getTextExtractor().extractText({ input: Buffer.from(fileBuffers), type: 'buffer' })

    await client.graphql({
      query: createCvTexts,
      variables: { input: { text, file: Key } },
    });
  } catch (err) {
    console.error(err);
  }
};
