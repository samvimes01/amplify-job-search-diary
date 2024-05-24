import { StateCreator } from 'zustand';
import { Schema } from '../../amplify/data/resource';
import { ClientSlice } from './interface';


export interface JobsSlice {
  getJobs: () => Promise<Schema["JobItem"]["type"][]>;
  deleteJob: (id: string) => Promise<string>;
}
export const createJobsSlice: StateCreator<
  ClientSlice & JobsSlice,
  [],
  [],
  JobsSlice
  > = (_, get) => ({
  getJobs: async () => {
    const client = get().client;
    const {data} = await client.models.JobItem.list();
    return data;
  },
  deleteJob: async (id: string) => {
    const client = get().client;
    await client.models.JobItem.delete({ id });
    return id;
  }
})
