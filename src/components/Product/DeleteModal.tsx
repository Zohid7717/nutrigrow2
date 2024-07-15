import { Dispatch, SetStateAction } from 'react';
import './styles/DeleteModal.scss'
import { useProduct } from '@/store/store';

type ModalProps = {
  setModal: Dispatch<SetStateAction<boolean>>
  delId: string | null
}

function DeleteModal({ setModal, delId }: ModalProps) {
  const delProduct = useProduct(state => state.delProduct)
  const handleDelete = () => {
    if (delId) {
      delProduct(delId)
      setModal(false)
    } else {
      console.log(delId)
    }
  }
  return (
    <div className='delete-modal'>
      <div className="delete-modal__wrap">
        <h4>Действительно хотите удалить данный товар?</h4>
        <div className="delete-modal__btn">
          <button onClick={() => handleDelete()}>Удалить</button>
          <button onClick={() => setModal(false)}>Отмена</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;