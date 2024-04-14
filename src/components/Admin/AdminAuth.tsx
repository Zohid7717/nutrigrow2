import { useAuth } from '@/store/store';
import { useEffect, useState } from 'react';
import AdminRegistration from './AdminRegistration';
import AdminAuthorization from './AdminAuthorization';

function AdminAuth() {
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const getMe = useAuth(state => state.getMe)

  useEffect(() => {
    getMe()
    // setIsRegistered()
  }, [])

  if (isRegistered) {
    return (
      <AdminAuthorization />
    )
  }
  return (
    <AdminRegistration />
  );
}

export default AdminAuth;