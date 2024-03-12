import { useLocale, useTranslations } from 'next-intl';
import Navigation from './Navigation/Navigation';
import Image from 'next/image';
import logo from "../../../public/image/icon/logo.svg";
import Link from 'next/link';
import './styles/TheHeader.scss'

function TheHeader({ params }: Readonly<{
  params: string
}>) {
  const t = useTranslations('Navigation')

  const navItems = [
    { label: t('home'), href: `/${params}/` },
    { label: t('catalog'), href: `/${params}/catalog` },
    { label: t('partners'), href: `/${params}/partners` },
    { label: t('blog'), href: `/${params}/blog` },
    { label: t('contacts'), href: `/${params}/contacts` }
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