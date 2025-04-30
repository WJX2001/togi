import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createTrackedSelector } from 'react-tracked';
import { Localstorage } from '@togi/data/storage';
interface State {
  appIcon: number;
  includeLowScore: boolean;
  resetPreferences: () => void;
  setAppIcon: (appIcon: number) => void;
  setIncludeLowScore: (includeLowScore: boolean) => void;
}

const store = create(
  persist<State>(
    (set) => ({
      appIcon: 0,
      includeLowScore: false,
      resetPreferences: () => set(() => ({ includeLowScore: false })),
      setAppIcon: (appIcon) => set(() => ({ appIcon })),
      setIncludeLowScore: (includeLowScore) => set(() => ({ includeLowScore })),
    }),
    { name: Localstorage.PreferencesStore }
  )
);

export const usePreferencesStore = createTrackedSelector(store);
