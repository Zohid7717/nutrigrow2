import { useAuth } from '@/store/store';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from "react-hook-form";

interface PropsType {
  setIsRegistered: Dispatch<SetStateAction<boolean>>
}

function AdminAuthorization({ setIsRegistered }: PropsType) {
  const login = useAuth(state=>state.login)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = handleSubmit(async (data: any) => {
    login(data)
  })

  return (
    <div className='auth-form'>
      <form onSubmit={onSubmit}>
        <h2>Авторизация пользователя</h2>
        <input
          type="text"
          placeholder='Имя'
          {...register('name', {
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
        <button>Авторизация</button>
      </form>
      <button onClick={() => setIsRegistered(false)}>У меня нет аккаунта</button>
    </div>
  );
}

export default AdminAuthorization;