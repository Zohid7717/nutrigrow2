import { useTranslations } from 'next-intl';
import '../styles/Hero.scss'
import Image from 'next/image';
import homeHeroBG from '../../../../public/image/bg/home-hero-bg.jpg'

function Hero() {
  const t = useTranslations('Home.hero')
  return (
    <section className='hero'>
      <h1>{t('h1')}</h1>
      <p>{t('text')}</p>
      <div className="hero__img">
        <Image src={homeHeroBG} alt='home hero bg'/>
      </div>
    </section>
  );
}

export default Hero;