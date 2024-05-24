import { StateCreator } from 'zustand';
import { ClientSlice } from './interface';
import { Schema } from '../../amplify/data/resource';


export interface JobsSlice {
  getJobs: () => Promise<Schema["JobItem"]["type"][]>;
  deleteJob: (id: string) => void;
}
export const createJobsSlice: StateCreator<
  ClientSlice & JobsSlice,
  [],
  [],
  JobsSlice
> = (set, get) => ({
  getJobs: async () => {
    const client = get().client;
    const {data} = await client.models.JobItem.list();
    return data;
  },
  deleteJob: (id: string) => set(({ client }) => {
    client.models.JobItem.delete({ id });
    return { client };
  })
})
