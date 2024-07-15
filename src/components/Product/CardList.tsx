'use client'
import { useAuth, useProduct } from '@/store/store'
import { useEffect, useState } from 'react'
import Card from './Card'
import './styles/CardList.scss'
import DeleteModal from './DeleteModal'

interface CardListProps {
  catalogTitles: {
    title1: string
    title2: string
    title3: string
    title4: string
  },
  locale: string
}

function CardList({ catalogTitles, locale }: CardListProps) {
  const products = useProduct(state => state.products)
  const getAll = useProduct(state => state.getAll)
  const getMe = useAuth(state => state.getMe)
  const [delId, setDelId] = useState<null | string>(null)
  const [modal, setModal] = useState<boolean>(false)
  useEffect(() => {
    getAll()
    getMe()
  }, [getAll])
  useEffect(() => {
    console.log(delId)
    console.log(modal)
  }, [delId, modal])
  return (
    <div className='catalog'>
      {
        modal ? <DeleteModal setModal={setModal} delId={delId} /> : ''
      }
      <div className="catalog__wrap">
        <div className="catalog__category">
          <h2>{catalogTitles.title1}</h2>
          <div className="catalog__items">
            {products && products.map((product, index: number) => (
              product.category === '2' ? <Card key={index} product={product} locale={locale} setModal={setModal} setDelId={setDelId} /> : ''
            ))}
          </div>
        </div>
        <div className="catalog__category">
          <h2>{catalogTitles.title2}</h2>
          <div className="catalog__items">
            {products && products.map((product, index: number) => (
              product.category === '1' ? <Card key={index} product={product} locale={locale} setModal={setModal} setDelId={setDelId} /> : ''
            ))}
          </div>
        </div>
        <div className="catalog__category">
          <h2>{catalogTitles.title3}</h2>
          <div className="catalog__items">
            {products && products.map((product, index: number) => (
              product.category === '3' ? <Card key={index} product={product} locale={locale} setModal={setModal} setDelId={setDelId} /> : ''
            ))}
          </div>
        </div>
        <div className="catalog__category">
          <h2>{catalogTitles.title4}</h2>
          <div className="catalog__items">
            {products && products.map((product, index: number) => (
              product.category === '4' ? <Card key={index} product={product} locale={locale} setModal={setModal} setDelId={setDelId} /> : ''
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;