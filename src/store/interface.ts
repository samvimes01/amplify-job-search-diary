import { V6Client } from '@aws-amplify/api-graphql';
import type { Schema } from "../../amplify/data/resource";

export interface ClientSlice {
  client: V6Client<Schema>,
}

export type JobItem = {
  company: string;
  name: string;
  description: string;
  appliedAt: Date;
  coverLetterText: string;
  cvFile: string;
  cvText: string;
  status: 'new' | 'applied' | 'interview' | 'rejected' | 'offer';
  reply: string;
};