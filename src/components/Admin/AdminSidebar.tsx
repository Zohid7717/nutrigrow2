import { Dispatch, SetStateAction } from 'react';
import './style/AdminSidebar.scss'
import { useAuth } from '@/store/store';

interface SidebarProps {
  setSelectedSheet: Dispatch<SetStateAction<string>>
}

function AdminSidebar({ setSelectedSheet }: SidebarProps) {
  const role = useAuth(state => state.role)
  const logout = useAuth(state => state.logout)

  return (
    <div className='admin-sidebar'>
      <button onClick={() => setSelectedSheet('products')}>Добавить продукт</button>
      {
        role === 'Admin' ? <button onClick={() => setSelectedSheet('users')}>Управления пользователями</button> : ''
      }

      <button onClick={() => logout()}>Выход</button>
    </div>
  );
}

export default AdminSidebar;