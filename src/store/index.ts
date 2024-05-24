import { generateClient } from "aws-amplify/data";
import { create } from 'zustand';
import { Schema } from '../../amplify/data/resource';
import { ClientSlice } from './interface';
import { JobItemSlice, createJobSlice } from './job_item';
import { JobsSlice, createJobsSlice } from './jobs';
import { ProfileSlice, createProfileSlice } from './profile';

export const client = generateClient<Schema>({ authMode: "userPool" });

export const useAmplifyClient = create<ClientSlice & JobsSlice & ProfileSlice & JobItemSlice>((...a) => ({
  client: generateClient<Schema>({ authMode: "userPool" }),
  ...createJobsSlice(...a),
   ...createProfileSlice(...a),
  ...createJobSlice(...a),
}))


export async function getJobLoader({params}: {params: {id: string}}) {
  const { data } = await client.models.JobItem.get({ id: params.id });
  return data
}