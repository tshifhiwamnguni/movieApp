import create from "zustand"
import { persist, devtools } from "zustand/middleware"

let reviewStore = (set) => ({
    selectedMovieTitle: "",
    selectedMovieImage: "",
    setMovieTitle: (title) => set((state) => ({selectedMovieTitle: localStorage.getItem("")})), 
});

// persist the creates store
reviewStore = persist(reviewStore, {name: "reviewStore"})
reviewStore = devtools(reviewStore)

// create a new store
const useReview = create(reviewStore);

export default useReview;