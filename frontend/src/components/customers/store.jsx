import create from "zustand"
import { persist, devtools } from "zustand/middleware"

let store = (set) => ({
    loggedUser: '',
    setUser: set(state => ({loggedUser: localStorage.getItem('username')})),
    people: ["John Doe", "Jane Doe", "Jill Doe"],
    addPerson: (person) => 
        set((state) => ({ people: [...state.people, person] })),
});

// persist the creates store
store = persist(store, {name: "myStore"})
store = devtools(store)

// create a new store
const useStore = create(store);

export default useStore;