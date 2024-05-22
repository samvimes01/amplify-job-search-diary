import { defineFunction } from '@aws-amplify/backend';

export const gptCoverLetter = defineFunction({
  name: 'gptCoverLetter',
  entry: './handler.ts'
});