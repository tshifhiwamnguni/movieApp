import create from "zustand"
import { persist, devtools } from "zustand/middleware"

let filterStore = (set) => ({
    reviewMovie: ''
})

// persist the creates store
filterStore = persist(filterStore, {name: "reviewStore"})
filterStore = devtools(filterStore)

// create the store
const filterStorer = create(filterStore)

export default filterStorer;

