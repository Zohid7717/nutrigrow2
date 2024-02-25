import Hero from '@/components/Hero/Hero';
import { useTranslations } from 'next-intl';
import heroBG from '../../../../public/image/bg/contact-hero-bg.jpg'
import ContactSection from '@/components/TheHome/ContactSection';

function Contacts() {
  const t = useTranslations('ContactUs')
  const heroContent = { h1: t('h1'), text: t('text') }
  return (
    <div className='contacts'>
      <Hero heroBG={heroBG} heroContent={heroContent} />
      <div className="contacts__contact-section">
        <ContactSection />
      </div>
    </div>
  );
}

export default Contacts;