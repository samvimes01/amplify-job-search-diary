import { defineFunction } from '@aws-amplify/backend';

export const onCvUploadHandler = defineFunction({
  name: "onCvUploadHandler",
  entry: "./handler.ts",
})