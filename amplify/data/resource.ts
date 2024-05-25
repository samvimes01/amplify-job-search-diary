import { a, defineData, type ClientSchema } from "@aws-amplify/backend";
import { genCoverLetter } from '../functions/gen-cover-letter/resource';
import { onCvUploadHandler } from '../functions/upload-handler/resource';

const schema = a.schema({
  generateCover: a
    .query()
    .arguments({ prompt: a.string().required() })
    .returns(a.string())
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function(genCoverLetter)),
  Prefs: a
    .model({
      fullName: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
  JobStatus: a.enum(['new', 'applied', 'interview', 'rejected', 'offer']),
  JobItem: a.model({
    company: a.string(),
    name: a.string().required(),
    description: a.string(),
    link: a.string(),
    createdAt: a.date().required(),
    coverLetterText: a.string(),
    cvFile: a.string(),
    cvText: a.string(),
    status: a.ref('JobStatus'),
  })
    .authorization((allow) => [allow.owner()]),
  CvTexts: a.model({
    file: a.string().required(),
    text: a.string(),
  })
    .authorization(allow => [allow.authenticated()])
}).authorization(allow => [allow.resource(onCvUploadHandler)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 3,
    },
  },
});
