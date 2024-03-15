import Hero from '@/components/Hero/Hero';
import ProductAdvantages from '@/components/TheHome/ProductAdvantages/ProductAdvantages';
import Why from '@/components/TheHome/Why/Why';
import { useTranslations } from 'next-intl';
import heroBG from '../../../public/image/bg/home-hero-bg.jpg'
import ContactSection from '@/components/TheHome/ContactSection';
import { unstable_setRequestLocale } from 'next-intl/server';
import HomePartners from '@/components/TheHome/HomePartners/HomePartners';

export default function Home({ params: { locale } }: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Home.hero')
  const heroContent = { h1: t('h1'), text: t('text') }
  return (
    <div>
      <Hero heroBG={heroBG} heroContent={heroContent} />
      <Why />
      <ProductAdvantages />
      <HomePartners/>
      <ContactSection />
    </div>
  );
}