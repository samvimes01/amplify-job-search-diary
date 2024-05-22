import { defineBackend } from '@aws-amplify/backend';
import { Stack } from 'aws-cdk-lib';
import { AuthorizationType, CognitoUserPoolsAuthorizer, Cors, LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Effect, Policy, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { auth } from './auth/resource';
import { MODEL_ID, data, mistralCoverLetter } from './data/resource';
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

// create a new API stack
const apiStack = backend.createStack("api-stack");

// create a new REST API
const myRestApi = new RestApi(apiStack, "RestApi", {
  restApiName: "myRestApi",
  deploy: true,
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS, // Restrict this to domains you trust
    allowMethods: ["POST", "OPTIONS", "GET"], // Specify only the methods you need to allow
    allowHeaders: Cors.DEFAULT_HEADERS, // Specify only the headers you need to allow
  },
});

// create a new Lambda integration
const lambdaIntegration = new LambdaIntegration(
  backend.gptCoverLetter.resources.lambda
);

// create a new resource path with IAM authorization
const itemsPath = myRestApi.root.addResource("prompt-cover-letter", {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.IAM,
  },
});

// add methods you would like to create to the resource path
itemsPath.addMethod("GET", lambdaIntegration);
itemsPath.addMethod("POST", lambdaIntegration);

// add a proxy resource path to the API
itemsPath.addProxy({
  anyMethod: true,
  defaultIntegration: lambdaIntegration,
});

// create a new Cognito User Pools authorizer
const cognitoAuth = new CognitoUserPoolsAuthorizer(apiStack, "CognitoAuth", {
  cognitoUserPools: [backend.auth.resources.userPool],
});

// create a new resource path with Cognito authorization
const booksPath = myRestApi.root.addResource("cognito-auth-path");
booksPath.addMethod("GET", lambdaIntegration, {
  authorizationType: AuthorizationType.COGNITO,
  authorizer: cognitoAuth,
});

// create a new IAM policy to allow Invoke access to the API
const apiRestPolicy = new Policy(apiStack, "RestApiPolicy", {
  statements: [
    new PolicyStatement({
      actions: ["execute-api:Invoke"],
      resources: [
        `${myRestApi.arnForExecuteApi("prompt-cover-letter")}`,
        `${myRestApi.arnForExecuteApi("cognito-auth-path")}`,
      ],
    }),
  ],
});

// attach the policy to the authenticated and unauthenticated IAM roles
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(
  apiRestPolicy
);
backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(
  apiRestPolicy
);

// add outputs to the configuration file
backend.addOutput({
  custom: {
    API: {
      [myRestApi.restApiName]: {
        endpoint: myRestApi.url,
        region: Stack.of(myRestApi).region,
        apiName: myRestApi.restApiName,
      },
    },
  },
});