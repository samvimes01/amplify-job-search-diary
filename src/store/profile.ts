import { StateCreator } from 'zustand';
import { ClientSlice } from './interface';

export interface ProfileSlice {
  openAiKey: string;
  getOpenAiKey: () => Promise<string>;
  setOpenAiKey: (key: string) => Promise<void>;
}

export const createProfileSlice: StateCreator<
  ClientSlice & ProfileSlice,
  [],
  [],
  ProfileSlice
> = (set, get) => ({
  openAiKey: '',
  getOpenAiKey: async () => {
    if (get().openAiKey) {
      return get().openAiKey;
    }
    const client = get().client;
    const { data } = await client.models.Prefs.list();
    const openAiKey = data[0]?.gptApiKey ?? "";
    return openAiKey
  },
  setOpenAiKey: async (key: string) => {
    const client = get().client;
    const { data } = await client.models.Prefs.list();
    if (!data.length) {
      client.models.Prefs.create({ gptApiKey: key, useAwsAI: false });
    } else {
      client.models.Prefs.update({ gptApiKey: key, id: data[0].id });
    }
    return set({ client, openAiKey: key })
  },
})