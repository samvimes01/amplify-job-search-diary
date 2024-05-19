import { V6Client } from '@aws-amplify/api-graphql';
import type { Schema } from "../../amplify/data/resource";

export interface ClientSlice {
  client: V6Client<Schema>,
}