import { useToast } from '@/store/store';
import { useEffect, useState } from 'react';
import Toast from './Toast';
import './style/Toast.scss'

function ToastContainer() {
  const message = useToast(state => state.message)
  const [toast, setToast] = useState<string[]>([])
  const addToast = (message: string) => {
    setToast([...toast, message])
  }

  const removeToast = (index: number) => {
    const newToasts = [...toast]
    newToasts.splice(index, 1)
    setToast(newToasts)
  }

  useEffect(() => {
    if (message) {
      addToast(message)
    }
  }, [message, addToast])

  return (
    <div className='toast-container'>
      {toast.map((message, index) => (
        <Toast key={index} message={message} onClose={() => removeToast(index)} />
      ))}
    </div>
  );
}

export default ToastContainer;