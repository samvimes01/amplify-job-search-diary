import { a, defineData, defineFunction, type ClientSchema } from "@aws-amplify/backend";

export const MODEL_ID = "mistral.mistral-7b-instruct-v0:2";

export const mistralCoverLetter = defineFunction({
  entry: "./mistral.ts",
  timeoutSeconds: 30,
  environment: {
    MODEL_ID,
  },
});

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  generateCover: a
    .query()
    .arguments({ prompt: a.string().required() })
    .returns(a.string())
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function(mistralCoverLetter)),
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
  Prefs: a
    .model({
      gptApiKey: a.string(),
      hasApiKey: a.boolean(),
      fullName: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
  JobItem: a.model({
    name: a.string().required(),
    description: a.string(),
    createdAt: a.date().required(),
    appliedAt: a.date(),
    coverLetterText: a.string(),
    cvFile: a.string(),
    cvText: a.string(),
    status: a.string(),
    reply: a.string(),
  })
    .authorization((allow) => [allow.owner()]),
  CvTexts: a.model({
    file: a.string().required(),
    text: a.string(),
  })
    .authorization(allow => [allow.authenticated(), allow.owner(), allow.custom()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    lambdaAuthorizationMode: {
      function: defineFunction({
        entry: './custom-authorizer.ts',
      }),
      timeToLiveInSeconds: 300,
    },
    apiKeyAuthorizationMode: {
      expiresInDays: 3,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
