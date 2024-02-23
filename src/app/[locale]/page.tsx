import ContactForm from '@/components/TheHome/HomeForm';
import Hero from '@/components/TheHome/Hero/Hero';
import ProductAdvantages from '@/components/TheHome/ProductAdvantages/ProductAdvantages';
import Why from '@/components/TheHome/Why/Why';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index')
  return (
    <div>
      <Hero />
      <Why />
      <ProductAdvantages />
      <ContactForm/>
    </div>
  );
}
