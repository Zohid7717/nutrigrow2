import { useLocale, useTranslations } from 'next-intl';
import Navigation from './Navigation/Navigation';
import Image from 'next/image';
import logo from "../../../public/image/icon/logo.svg";
import Link from 'next/link';
import './styles/TheHeader.scss'

function TheHeader() {
  const t = useTranslations('Navigation')
  const locale = useLocale()
  const navItems = [
    { label: t('home'), href: '/' },
    { label: t('catalog'), href: '/catalog' },
    { label: t('partners'), href: '/partners' },
    { label: t('blog'), href: '/blog' },
    { label: t('contacts'), href: '/contacts' }
  ]

  return (
    <div className="container">
      <header>
        <div className="logo">
          <Link href='/'>
            <Image src={logo} alt='logo image' width={54} height={54} />
          </Link>
        </div>
        <Navigation navItems={navItems} />
      </header>
    </div>
  );
}

export default TheHeader;