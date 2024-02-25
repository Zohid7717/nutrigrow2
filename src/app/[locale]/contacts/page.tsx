import Hero from '@/components/Hero/Hero';
import { useTranslations } from 'next-intl';
import heroBG from '../../../../public/image/bg/contact-hero-bg.jpg'

function Contacts() {
  const t = useTranslations('ContactUs')
  const heroContent = { h1: t('h1'), text: t('text') }
  return (
    <div className='contacts'>
      <Hero heroBG={heroBG} heroContent={heroContent}/>
    </div>
  );
}

export default Contacts;