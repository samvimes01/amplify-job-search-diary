import { defineBackend } from '@aws-amplify/backend';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { auth } from './auth/resource';
import { MODEL_ID } from './data/mistral';
import { data, mistralCoverLetter } from './data/resource';
import { initAPI } from './functions/prompt/init-api';
import { gptCoverLetter } from './functions/prompt/resource';
import { storage } from './storage/resource';

const backend = defineBackend({
  auth,
  data,
  storage,
  gptCoverLetter,
  mistralCoverLetter,
});

backend.mistralCoverLetter.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    effect: Effect.ALLOW,
    actions: ["bedrock:InvokeModel"],
    resources: [
      `arn:aws:bedrock:*::foundation-model/${MODEL_ID}`,
    ],
  })
);

initAPI(backend)