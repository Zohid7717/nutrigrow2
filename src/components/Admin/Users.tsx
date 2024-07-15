import { useForm } from "react-hook-form";
import { useUsers } from '@/store/store';
import { useEffect, useState } from 'react';
import './style/AuthForm.scss'
import './style/Users.scss'

interface UserType {
  id: string,
  name: string,
  role: string
}

function Users() {
  const userReg = useUsers(state => state.userReg)
  const dataUsers = useUsers(state => state.users)
  const getUsers = useUsers(state => state.getAll)
  const delUser = useUsers(state => state.userDel)
  const [users, setUsers] = useState<UserType[] | null>(null)

  const {
    register, handleSubmit, reset, formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = handleSubmit(async (data: any) => {
    userReg(data)
    reset()
  })

  useEffect(() => {
    getUsers()
  }, [getUsers])

  useEffect(() => {
    setUsers(dataUsers)
  }, [dataUsers])

  return (
    <div className='users'>
      <div className='auth-form'>
        <form onSubmit={onSubmit}>
          <h2>Регистрация пользователя</h2>
          <input
            type="text"
            placeholder='Имя'
            {...register('name', {
              required: true
            })}
          />
          <input
            placeholder='Пароль'
            type="password"
            {...register('password', {
              required: true
            })}
          />
          <button>Регистрация</button>
        </form>
      </div>
      <div className="users__list">
        <table>
          <caption>Список пользователей сайта</caption>
          <thead>
            <tr>
              <th>№</th>
              <th>Имя</th>
              <th>Роль</th>
              <th>Удаления</th>
            </tr>
          </thead>
          <tbody>
            {users !== null ? users.map((user, index: number) => (
              <tr className='tr' key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td className='users__del' onClick={() => delUser(user.id)}>Удалить</td>
              </tr>
            )) : ''}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;