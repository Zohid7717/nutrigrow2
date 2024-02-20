import { useTranslations } from 'next-intl';
import Link from 'next/link';
import '../styles/AdvantagesList.scss'
import AdvantagesAccordion from './AdvantagesAccordion';


function AdvantagesList() {
  const t = useTranslations('Home.ProductAdvantages')
  const advantagesList = [
    {title: t('items.item-1.title'), content: t('items.item-1.content')},
    {title: t('items.item-2.title'), content: t('items.item-2.content')},
    {title: t('items.item-3.title'), content: t('items.item-3.content')},
    {title: t('items.item-4.title'), content: t('items.item-4.content')},
  ]
  return (
    <div className='advantages-list'>
      <div className="advantages-list__title">
        <h3>{ t('h3')}</h3>
        <h4>{ t('h4')}</h4>
      </div>
      <AdvantagesAccordion advantagesList={advantagesList } />
    </div>
  );
}

export default AdvantagesList;