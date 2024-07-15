'use client'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/store/store'
import { Dispatch, SetStateAction } from 'react'
import "./style/AuthForm.scss"

interface PropsType {
  setIsRegistered: Dispatch<SetStateAction<boolean>>
}

function AdminRegistration({ setIsRegistered }: PropsType) {
  const adminReg = useAuth(state => state.adminReg)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = handleSubmit(async (data: any) => {
    adminReg(data)
  })

  return (
    <div className="auth-form">
      <form  onSubmit={onSubmit}>
        <h2>Регистрация администратора </h2>
        <input
          type="text"
          placeholder='Имя'
          {...register('name', {
            required: true
          })}
        />
        <input
          type="text"
          placeholder='Пароль администратора'
          {...register('adminpass', {
            required: true
          })}
        />
        <input
          type="password"
          placeholder='Пароль'
          {...register('password', {
            required: true
          })}
        />
        <button>Регистрация</button>
      </form>
      <button onClick={()=>setIsRegistered(true)} className='regBtn'>У меня есть аккаунт</button>
    </div>
  )
}

export default AdminRegistration;