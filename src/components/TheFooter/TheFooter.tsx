import Link from 'next/link';
import Social from './Social';
import './styles/TheFooter.scss'
import { useTranslations } from 'next-intl';
import Explore from './Explore';
import Activities from './Activities';
import FooterContact from './FooterContact';

function TheFooter() {
  const t = useTranslations('Footer')
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__main">
            <Social />
            <Explore />
            <Activities />
            <FooterContact/>
          </div>
          <p className="footer__copyright"><Link href='/privacy'>© 2022 NutriGrow. {t('privacy')} </Link></p>
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;