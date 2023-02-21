import create from 'zustand'

export const useReviewsStore = create((set) => ({
    selectedMovieTitle: "",
    selectedMovieImage: "",
    setMovieTitle: (title) => set((state) => ({selectedMovieTitle: localStorage.get})), 
}));