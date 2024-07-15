'use client'
import { useProduct } from '@/store/store';
import { useEffect } from 'react';
import FullCardEn from './FullCardEn';
import FullCardRu from './FullCardRu';
import './styles/FullCard.scss'

interface FullCardProps {
  id: string;
  locale: string;
}

function FullCard({ id, locale }: FullCardProps) {
  const getOne = useProduct(state => state.getOne)
  const product = useProduct(state => state.product)
  useEffect(() => {
    if (id) {
      getOne(id)
    }
  }, [id, getOne])
  return (
    <div className='full-card'>
      <h2>{product?.name}</h2>
      {
        locale === 'en' ? <FullCardEn product={product} /> : <FullCardRu product={product} />
      }
    </div>
  );
}

export default FullCard;