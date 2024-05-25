import { defineBackend } from '@aws-amplify/backend';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { genCoverLetter } from './functions/gen-cover-letter/resource';
import { MODEL_ID } from './functions/gen-cover-letter/ai-model';

const backend = defineBackend({
  auth,
  data,
  storage,
  genCoverLetter,
});

backend.genCoverLetter.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    effect: Effect.ALLOW,
    actions: ["bedrock:InvokeModel"],
    resources: [
      `arn:aws:bedrock:*::foundation-model/${MODEL_ID}`,
    ],
  })
);