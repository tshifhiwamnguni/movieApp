import create from 'zustand'

export const useUsersStore = create((set) => ({
    data: [],
    isLoading: false,
    error: null,
    getUsers: async () => {
        try {
            set({isLoading: true})
            const response = await getUsers()
            set({isLoading: false, data: response.data})
        } catch (err) {
            set({error: err.message, isLoading: false})
        }
    }
}))