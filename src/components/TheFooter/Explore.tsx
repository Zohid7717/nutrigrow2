import { useTranslations } from 'next-intl';
import Link from 'next/link';
import './styles/Explore.scss'

function Explore({ params }: Readonly<{
  params: string
}>) {
  const t = useTranslations('Navigation')
  const t2 = useTranslations('Footer.social')
  return (
    <div className='explore'>
      <h3>{t2('h3')}</h3>
      <div className="explore__items">
        <Link href={`/${params}.html`}>{t('home')}</Link>
        <Link href={`/${params}/catalog.html`}>{t('catalog')}</Link>
        <Link href={`/${params}/partners.html`}>{t('partners')}</Link>
        <Link href={`/${params}/blog.html`}>{t('blog')}</Link>
        <Link href={`/${params}/contacts.html`}>{t('contacts')}</Link>
      </div>
    </div>
  );
}

export default Explore;