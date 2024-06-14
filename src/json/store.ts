   // lib/store.ts
   import { create } from 'zustand';

   interface StoreState {
     sharedData: string | null; 
     setSharedData: (data: string | null) => void;
   }

   const useStore = create<StoreState>((set) => ({
     sharedData: null,
     setSharedData: (data) => set({ sharedData: data }),
   }));

   export default useStore;