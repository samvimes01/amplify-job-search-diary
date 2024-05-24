import { StateCreator } from 'zustand';
import { ClientSlice, JobItem } from './interface';

export interface JobItemSlice {
  createJob: (content: JobItem) => void;
  getCvText: (file: string) => Promise<string>;
}
export const createJobSlice: StateCreator<
  ClientSlice & JobItemSlice,
  [],
  [],
  JobItemSlice
> = (set, get) => ({
  createJob: (c: JobItem) => set(({ client }) => {
    client.models.JobItem.create({ 
      ...c,
      createdAt: new Date().toUTCString(),
      appliedAt: c.appliedAt ? c.appliedAt.toUTCString() : "",
     });
    return { client };
  }),
  getCvText: async (file: string) => {
    const client = get().client;

    const { data, errors } = await client.models.CvTexts.list({
      filter: {
        file: { eq: file },
      },
    });
    if (errors) return "";
    if (!data.length) return "";
    return data[0].text ?? "";
  },
})
