import Hero from '@/components/Hero/Hero';
import ProductAdvantages from '@/components/TheHome/ProductAdvantages/ProductAdvantages';
import Why from '@/components/TheHome/Why/Why';
import { useTranslations } from 'next-intl';
import heroBG from '../../../public/image/bg/home-hero-bg.jpg'
import ContactSection from '@/components/TheHome/ContactSection';

export default function Home() {
  const t = useTranslations('Home.hero')
  const heroContent = { h1: t('h1'), text: t('text') }
  return (
    <div>
      <Hero heroBG={heroBG} heroContent={heroContent} />
      <Why />
      <ProductAdvantages />
      <ContactSection />
    </div>
  );
}
