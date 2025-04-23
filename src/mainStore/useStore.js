import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(persist(
    set => ({
        projects: [],

        fetchProjects: async () => {
            try {
                const res = await fetch('/data/projects.json')
                const data = await res.json()
                console.log(data)
                set({ projects: data })
            } catch (error) {
                console.log(error)
            }
        }
    }),
    { name: 'root' }
))

export default useStore