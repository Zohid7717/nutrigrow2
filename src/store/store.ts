import axios from '@/utils/axios'
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

interface AuthType {
  message: string,
  isAuth: boolean,
  loading: boolean,
  role: string | null,
  adminReg: (data: any) => void,
  getMe: ()=>void
}

export const useAuth = create<AuthType>(set => ({
  message: '',
  isAuth: false,
  loading: false,
  role: null,
  adminReg: async (data) => {
    try {
      set({
        loading: true,
        message: '',
        isAuth: false
      })
      const res:any = await axios.post('/user/regadmin', data)
      set({
        message: res.data.message,
        isAuth: res.data.success,
        loading: false,
        role: res.data.role
      })
      console.log(res.data)
      window.localStorage.setItem('token', res.data.token)
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: '',
        isAuth: false
      })
    }
  },
  getMe: async () => {
    try {
      set({
        loading: true,
        isAuth: false,
        message: '',
        role: null
      })
      const res:any = await axios.get('/user/checkadmin')
      set({
        message: res.data.message,
        isAuth: res.data.success,
        loading: false,
        role: res.data.role
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: '',
        isAuth: false
      })
    }
  }
}))

interface RegType {
  message: string,
  isAuth: boolean,
  loading: boolean
  registration: () => void,
}

export const useReg = create<RegType>(set => ({
  message: '',
  loading: false,
  isAuth: false,
  registration: async () => {
    try {
      set({
        loading: true,
        message: '',
        isAuth: false
      })
      // const res = await 
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: '',
        isAuth: false
      })
    }
  }
}))