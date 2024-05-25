import { StateCreator } from 'zustand';
import { ClientSlice } from './interface';

export interface ProfileSlice {
  getPrefs: () => Promise<{ name: string }>;
  setPrefs: (name: string) => Promise<void>;
}

export const createProfileSlice: StateCreator<
  ClientSlice & ProfileSlice,
  [],
  [],
  ProfileSlice
> = (_, get) => ({
  getPrefs: async () => {
    const client = get().client;
    const { data } = await client.models.Prefs.list();
    const name = data[0]?.fullName ?? "";
    return { name}
  },
  setPrefs: async (name: string) => {
    const client = get().client;
    const { data } = await client.models.Prefs.list();
    if (!data.length) {
      client.models.Prefs.create({ fullName: name, });
    } else {
      client.models.Prefs.update({ fullName: name, id: data[0].id });
    }
  }
})