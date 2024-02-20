import Link from 'next/link';
import Social from './Social';
import './styles/TheFooter.scss'
import { useTranslations } from 'next-intl';
import Explore from './Explore';

function TheFooter() {
  const t = useTranslations('Footer')
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__main">
            <Social />
            <Explore />
          </div>
          <p className="footer__copyright"><Link href='/privacy'>© 2022 NutriGrow. {t('privacy')} </Link></p>
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;