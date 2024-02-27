import { useToast } from '@/store/store';
import { useEffect } from 'react';
import './style/Toast.scss'

type ToastProps = {
  message: string | null,
  onClose: () => void
}

function Toast({ message, onClose }: ToastProps) {
  const addMessage = useToast(state => state.addMessage)
  const clearMessage = useToast(state => state.clearMessage)
  useEffect(() => {
    const timeOut = setTimeout(() => {
      onClose()
    }, 5000)
    if (message?.length! > 0) {
      clearMessage()
    }
    return ()=>clearTimeout(timeOut)
  }, [onClose])
  return (
    <div className='toast'>
      <p>{message}</p>
      <button onClick={onClose}></button>
    </div>
  );
}

export default Toast;