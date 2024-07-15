import { ProductTypeProps } from '@/types/products';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


function FullCardRu({ product }: ProductTypeProps) {
  const t = useTranslations('Catalog.Card')
  if (!product) {
    return <p>продук не найден</p>
  } else {
    return (
      <div className='card-un'>
        <p>{product.description_ru}</p>
        <div className="card-un__main">
          <div className="card-un__main-img">
            <Image
              src={`http://localhost:3003/${product.img}`}
              alt={product.name}
              width={500}
              height={300}
            />
          </div>
          <div className="card-un__advantages">
            <h4>
              {t('advantages')}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: product.advantages_ru }}></div>
          </div>
        </div>
        <div className="card-un__composition" >
          <h4>
            {t('compound')}
          </h4>
          <div dangerouslySetInnerHTML={{ __html: product.composition_ru }}></div>
        </div>
        <div className="card-un__rate" >
          <h4>
            {t('rate')}
          </h4>
          <div dangerouslySetInnerHTML={{ __html: product.rate_ru }}></div>
        </div>
      </div>
    )
  }
}

export default FullCardRu;