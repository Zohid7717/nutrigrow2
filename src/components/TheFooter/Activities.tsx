import { useTranslations } from 'next-intl';
import ActivitiesSwiper from './ActivitiesSwiper';
import './styles/Activities.scss'


function Activities() {
  const t = useTranslations('Footer.activities')
  return (
    <div className='activities'>
      <h3>{t('h3')}</h3>
      <ActivitiesSwiper/>
    </div>
  );
}

export default Activities;