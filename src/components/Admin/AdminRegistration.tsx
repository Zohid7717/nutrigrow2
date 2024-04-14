'use client'
import { useForm } from 'react-hook-form'
import "./style/AuthForm.scss"
import { useAuth } from '@/store/store'


function AdminRegistration() {
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
    <>
      <form className="auth-form" onSubmit={onSubmit}>
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
        <button>Войти</button>
      </form>
    </>
  )
}

export default AdminRegistration;