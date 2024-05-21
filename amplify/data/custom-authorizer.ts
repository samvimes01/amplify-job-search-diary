import type { AppSyncAuthorizerHandler } from 'aws-lambda';
type ResolverContext = {
  info: string;
};

export const handler: AppSyncAuthorizerHandler<ResolverContext> = async (
  event
) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const {
    authorizationToken,
    requestContext: { apiId, accountId }
  } = event;
  const response = {
    isAuthorized: authorizationToken === 'custom-authorized',
    resolverContext: {
      info: `${process.env.AWS_REGION}:${accountId}:apis/${apiId}`,
    },
  };
  console.log(`RESPONSE: ${JSON.stringify(response, null, 2)}`);
  return response;
};