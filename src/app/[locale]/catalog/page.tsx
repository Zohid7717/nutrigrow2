import CardList from '@/components/Product/CardList';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations('Catalog.Meta')
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords')
  }
}

function Catalog({ params: { locale } }: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Catalog')
  const catalogTitles = {
    title1: t('title-1'),
    title2: t('title-2'),
    title3: t('title-3'),
    title4: t('title-4')
  }
  return (
    <div className='catalog-page'>
      <h1 className='page-title'>{t('h1')}</h1>
      <CardList catalogTitles={catalogTitles} locale={locale} />
    </div>
  );
}

export default Catalog;