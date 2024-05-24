import { StateCreator } from 'zustand';
import { ClientSlice, JobItem } from './interface';

export interface JobItemSlice {
  createJob: (content: JobItem) => void;
  getCvText: (file: string) => Promise<string>;
}

const dateFormatter = (date: Date) => {
  const yearFormatter = new Intl.DateTimeFormat('en-US', { year: 'numeric' });
  const monthFormatter = new Intl.DateTimeFormat('en-US', { month: '2-digit' });
  const dayFormatter = new Intl.DateTimeFormat('en-US', { day: '2-digit' });
  const year = yearFormatter.format(date);
  const month = monthFormatter.format(date);
  const day = dayFormatter.format(date);

  return `${year}-${month}-${day}`;
};
export const createJobSlice: StateCreator<
  ClientSlice & JobItemSlice,
  [],
  [],
  JobItemSlice
> = (set, get) => ({
  createJob: (c: JobItem) => set(({ client }) => {
    client.models.JobItem.create({ 
      ...c,
      createdAt: dateFormatter(new Date()),
      appliedAt: dateFormatter(c.appliedAt || new Date()),
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
