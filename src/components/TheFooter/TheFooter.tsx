import Link from 'next/link';
import Social from './Social';
import { useTranslations } from 'next-intl';
import Explore from './Explore';
import Activities from './Activities';
import FooterContact from './FooterContact';
import './styles/TheFooter.scss'

function TheFooter({ params }: Readonly<{
  params: string
}>) {
  const t = useTranslations('Footer')
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__main">
            <Social params={ params} />
            <Explore params={params} />
            <Activities />
            <FooterContact />
          </div>
          <p className="footer__copyright"><Link href={`/${params}/privacy`}>© 2022 NutriGrow. {t('privacy')} </Link></p>
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;