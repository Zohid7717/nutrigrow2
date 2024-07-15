export type ProductsType = {
  id: string,
  name: string,
  category: string,
  img: string,
  description_en: string,
  description_ru: string,
}

export type ProductType = {
  id: string,
  name: string,
  category: string,
  img: string,
  description_en: string,
  description_ru: string,
  advantages_en: string,
  advantages_ru: string,
  composition_en: string,
  composition_ru: string,
  rate_en: string,
  rate_ru: string
}

export type ProductTypeProps = {
  product: ProductType | null
}