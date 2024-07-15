import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AddProduct from './AddProduct';
import Users from './Users';
import './style/AdminDashboard.scss'

function AdminDashboard() {
  const [selectedSheet, setSelectedSheet] = useState<string>('products')
  return (
    <div className='admin-dashboard'>
      <AdminSidebar setSelectedSheet={setSelectedSheet} />
      {
        selectedSheet === 'products' ?
          <AddProduct /> : <Users />
      }
    </div>
  );
}

export default AdminDashboard;