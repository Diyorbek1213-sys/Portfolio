import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(persist(
    set => ({
        
    }),
    { name: 'root' }
))

export default useStore