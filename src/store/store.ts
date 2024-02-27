import { create } from "zustand"

interface ToastType {
  message: string,
  addMessage: (text: string) => void,
  clearMessage: () => void
}

export const useToast = create<ToastType>(set => ({
  message: '',
  addMessage: (text) => set(state => ({
    message: text
  })),
  clearMessage: () => set(state => ({
    message: ''
  }))
}))