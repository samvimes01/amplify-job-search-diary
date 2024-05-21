import { StateCreator } from 'zustand';
import { ClientSlice } from './interface';

export type JobItem = {
  name: string;
  description: string;
  appliedAt: Date;
  coverLetterText: string;
  cvFile: string;
  cvText: string;
  status: string;
  reply: string;
};

export interface JobSlice {
  createJob: (content: JobItem) => void;
  deleteJob: (id: string) => void;
  getCvText: (file: string) => Promise<string>;
}
export const createJobSlice: StateCreator<
  ClientSlice & JobSlice,
  [],
  [],
  JobSlice
> = (set, get) => ({
  createJob: (c: JobItem) => set(({ client }) => {
    client.models.JobItem.create({ 
      ...c,
      createdAt: new Date().toUTCString(),
      appliedAt: c.appliedAt ? c.appliedAt.toUTCString() : "",
     });
    return { client };
  }),
  deleteJob: (id: string) => set(({ client }) => {
    client.models.JobItem.delete({ id });
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
