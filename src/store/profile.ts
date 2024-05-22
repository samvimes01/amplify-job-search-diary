import { StateCreator } from 'zustand';
import { ClientSlice } from './interface';

export interface ProfileSlice {
  hasApiKey: boolean | null;
  hasOpenAiKey: () => Promise<boolean>;
  getPrefs: () => Promise<{name: string; key: string }>;
  setPrefs: (key: string, name: string) => Promise<void>;
}

export const createProfileSlice: StateCreator<
  ClientSlice & ProfileSlice,
  [],
  [],
  ProfileSlice
> = (set, get) => ({
  hasApiKey: null,
  hasOpenAiKey: async () => {
    if (get().hasApiKey != null) {
      return !!get().hasApiKey;
    }
    const client = get().client;
    const { data } = await client.models.Prefs.list();
    const hasApiKey = data[0]?.hasApiKey ?? false;
    return !!hasApiKey
  },
  getPrefs: async () => {
    const client = get().client;
    const { data } = await client.models.Prefs.list();
    const key = data[0]?.gptApiKey ?? "";
    const name = data[0]?.fullName ?? "";
    return { key, name}
  },
  setPrefs: async (key: string, name: string) => {
    const client = get().client;
    const { data } = await client.models.Prefs.list();
    if (!data.length) {
      client.models.Prefs.create({ gptApiKey: key, fullName: name, hasApiKey: !!key });
    } else {
      client.models.Prefs.update({ gptApiKey: key, fullName: name, hasApiKey: !!key, id: data[0].id });
    }
    return set({ client, hasApiKey: !!key })
  }
})