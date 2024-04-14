'use client'
import AdminAuth from '@/components/Admin/AdminAuth';
import AdminDashboard from '@/components/Admin/AdminDashboard';
import AdminRegistration from '@/components/Admin/AdminRegistration';
import { useAuth } from '@/store/store';


function Auth() {
  const isAuth = useAuth(state => state.isAuth)

  if (!isAuth) {
    return (
      <>
        <AdminAuth />
      </>
    )
  }

  return (
    <>
      <AdminDashboard/>
    </>
  );
}

export default Auth;