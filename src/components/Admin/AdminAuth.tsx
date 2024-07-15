import { useAuth } from '@/store/store';
import { useEffect, useState } from 'react';
import AdminRegistration from './AdminRegistration';
import AdminAuthorization from './AdminAuthorization';

function AdminAuth() {
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const getMe = useAuth(state => state.getMe)

  useEffect(() => {
    getMe()
  }, [getMe])

  return (
    <div className="admin-auth">
      <div className="admin-auth__btns">
        {
          isRegistered ?
            <AdminAuthorization setIsRegistered={setIsRegistered} /> :
            <AdminRegistration setIsRegistered={setIsRegistered} />
        }
      </div>
    </div>
  )
}

export default AdminAuth;