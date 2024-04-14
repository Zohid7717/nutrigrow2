import Hero from '@/components/Hero/Hero';
import ProductAdvantages from '@/components/TheHome/ProductAdvantages/ProductAdvantages';
import Why from '@/components/TheHome/Why/Why';
import { useTranslations } from 'next-intl';
import heroBG from '../../../../public/image/bg/home-hero-bg.jpg'
import ContactSection from '@/components/TheHome/ContactSection';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import HomePartners from '@/components/TheHome/HomePartners/HomePartners';

export async function generateMetadata({ params: { locale } }: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations('Home.Meta')
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords')
  }
}

export default function Home({ params: { locale } }: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Home')
  const heroContent = { h1: t('hero.h1'), text: t('hero.text') }
  return (
    <div>
      <Hero heroBG={heroBG} heroContent={heroContent} />
      <Why />
      <ProductAdvantages />
      <HomePartners />
      <ContactSection />
    </div>
  );
}