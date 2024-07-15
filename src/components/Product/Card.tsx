import { ProductsType } from '@/types/products';
import Image from 'next/image';
import Link from 'next/link';
import './styles/Card.scss'
import { useTranslations } from 'next-intl';
import trash from '../../../public/image/icon/trash.svg'
import { useAuth } from '@/store/store';
import { Dispatch, SetStateAction } from 'react';

interface CardProps {
  product: ProductsType,
  locale: string,
  setModal: Dispatch<SetStateAction<boolean>>,
  setDelId: Dispatch<SetStateAction<string | null>>
}

function Card({ product, locale, setModal, setDelId }: CardProps) {
  const isAuth = useAuth(state => state.isAuth)
  const t = useTranslations('Catalog')
  const handleDelBtn = () => {
    setModal(true)
    setDelId(product.id)
  }
  return (
    <div className='product-card'>
      <div className="product-card__img">
        <Image
          src={`http://localhost:3003/${product.img}`}
          alt={`${product.name}`}
          width={500}
          height={300}
        />
      </div>
      <div className="product-card__title">
        <h2>{product.name}</h2>
        {
          locale === 'en' ? <p>{product.description_en}</p> : <p>{product.description_ru}</p>
        }
        <Link href={`/catalog/${product.id}`}>
          {t('Card.ReadMore')}
        </Link>
      </div>
      {
        isAuth ?
          <button className="product-card__trash" onClick={()=>handleDelBtn()}>
            <Image
              src={trash}
              alt="trash"
              width={30}
              height={30}
            />
          </button> : ''
      }
    </div>
  );
}

export default Card;