import { ProductsType, ProductType } from '@/types/products'
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
  getMe: () => void,
  login: (data: any) => void,
  logout: () => void
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
      const res: any = await axios.post('/user/regadmin', data)
      set({
        message: res.data.message,
        isAuth: res.data.success,
        loading: false,
        role: res.data.role
      })
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
      const res: any = await axios.get('/user/checkadmin')
      set({
        message: res.data.message,
        isAuth: res.data.success,
        loading: false,
        role: res.data.role
      })
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: '',
        isAuth: false
      })
    }
  },
  login: async (data) => {
    try {
      set({
        loading: true,
        message: ''
      })
      const res: any = await axios.post('/user/login', data)
      set({
        loading: false,
        message: res.data.message,
        isAuth: res.data.success,
        role: res.data.role,
      })
      window.localStorage.setItem('token', res.data.token)
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: ''
      })
    }
  },
  logout: async () => {
    try {
      set({
        loading: true,
        message: ''
      })
      window.localStorage.removeItem('token')
      set({
        loading: false,
        isAuth: false,
        role: null,
      })
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: ''
      })
    }
  }
}))

interface UsersType {
  message: string,
  users: any,
  loading: boolean
  userReg: (data: any) => void,
  getAll: () => void,
  userDel: (id: string) => void
}

export const useUsers = create<UsersType>(set => ({
  message: '',
  loading: false,
  users: [],
  userReg: async (data) => {
    try {
      set({
        loading: true,
        message: ''
      })
      const res: any = await axios.post('/user/reguser', data)
      set({
        message: res.data.message,
        loading: false
      })
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: ''
      })
    }
  },
  getAll: async () => {
    try {
      set({
        loading: true,
        message: ''
      })
      const res: any = await axios.get('/user/getusers')
      set({
        loading: false,
        users: res.data.users
      })
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: ''
      })
    }
  },
  userDel: async (id) => {
    try {
      set({
        loading: true,
        message: ''
      })
      const res: any = await axios.delete(`/user/deluser/${id}`)
      set({
        loading: false,
        message: res.data.message,
        users: res.data.users
      })
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: ''
      })
    }
  }
}))



interface ProductStateType {
  message: string,
  product: ProductType | null,
  products: ProductsType[] | null,
  loading: boolean,
  productsId: string[] | [],
  addProduct: (data: any) => void,
  getAll: () => void,
  getOne: (id: string) => void,
  delProduct: (id: string) => void,
  getAllId: () => void
}

export const useProduct = create<ProductStateType>(set => ({
  message: '',
  product: null,
  products: null,
  loading: false,
  productsId: [],
  addProduct: async (data) => {
    try {
      set({
        loading: true,
      })
      const res: any = await axios.post('/product/add', data)
      set({
        loading: false,
        message: res.data.message
      })
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: 'Произошло ошибка!'
      })
    }
  },
  getAll: async () => {
    try {
      set({
        loading: true
      })
      const res: any = await axios.get('/product/getproducts')
      set({
        loading: false,
        products: res.data.products
      })
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: 'Произошло ошибка!'
      })
    }
  },
  getOne: async (id) => {
    try {
      set({
        loading: true
      })
      const res: any = await axios.get(`product/${id}`)
      set({
        loading: false,
        product: res.data.product
      })
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: 'Произошло ошибка!'
      })
    }
  },
  delProduct: async (id) => {
    try {
      set({
        loading: true,
      })
      const res: any = await axios.delete(`/product/${id}`)
      set({
        loading: false,
        message: res.data.message,
        products: res.data.products
      })
    } catch (error) {
      console.log(error)
      set({
        loading: false,
        message: 'Произашло ошибка! Пожалюста повторите попытку!'
      })
    }
  },
  getAllId: async () => {
    try {
      set({
        loading: true,
      })
      const res: any = await axios.get('/product/getAllId')
      set({
        loading: false,
        message: res.data.message,
        productsId: res.data.productsId
      })
    } catch (error) {
      set({
        loading: false,
        message: 'Произошло ошибка. Повторите попытку!'
      })
    }
  }
}))