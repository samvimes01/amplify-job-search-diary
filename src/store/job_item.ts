import { StateCreator } from 'zustand';
import { ClientSlice, JobItem } from './interface';

export interface JobItemSlice {
  createJob: (content: JobItem) => Promise<{ id: string; error: string }>;
  updateJob: (content: JobItem) => Promise<{ id: string; error: string }>;
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
> = (_, get) => ({
  createJob: async (c: JobItem) => {
    const client = get().client;
    const { data, errors } = await client.models.JobItem.create({ 
      ...c,
      createdAt: dateFormatter(new Date()),
     });
    return { id: data?.id || "", error: errors?.[0].message ?? "" }
  },
  updateJob: async (c: JobItem) => {
    const client = get().client;
    const { data, errors } = await client.models.JobItem.update({
      id: c.id, 
      company: c.company,
      name: c.name,
      description: c.description,
      link: c.link,
      coverLetterText: c.coverLetterText,
      cvFile: c.cvFile,
      cvText: c.cvText,
      status: c.status,
      createdAt: c.createdAt,
     });
    return { id: data?.id || "", error: errors?.[0].message ?? "" }
  },
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
