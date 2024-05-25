import { defineFunction } from '@aws-amplify/backend';
import { MODEL_ID } from './ai-model';

export const genCoverLetter = defineFunction({
  name: "genCoverLetter",
  entry: "./handler.ts",
  timeoutSeconds: 30,
  environment: {
    MODEL_ID,
  },
});