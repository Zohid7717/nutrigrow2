import Ticker from '@/components/Ticker/Ticker';
import { useTranslations } from 'next-intl';
import '../styles/HomePartners.scss'

function HomePartners() {
  const t = useTranslations('Home.Partners')
  return (
    <section className='home-partners'>
      <a href="">{t('a')}</a>
      <h2>{t('h2')}</h2>
      <Ticker/>
    </section>
  );
}

export default HomePartners;