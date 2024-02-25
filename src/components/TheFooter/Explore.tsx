import { useTranslations } from 'next-intl';
import Link from 'next/link';
import './styles/Explore.scss'

function Explore() {
  const t = useTranslations('Navigation')
  const t2 = useTranslations('Footer.social')
  return (
    <div className='explore'>
      <h3>{ t2('h3')}</h3>
      <div className="explore__items">
        <Link href='/'>{ t('home')}</Link>
        <Link href='/catalog'>{t('catalog')}</Link>
        <Link href='/partners'>{t('partners')}</Link>
        <Link href='/blog'>{t('blog')}</Link>
        <Link href='/contacts'>{t('contacts')}</Link>
      </div>
    </div>
  );
}

export default Explore;