import { useTranslations } from 'next-intl';
import '../ComponentsStyle/Hero.scss'
import Image, { StaticImageData } from 'next/image';

type HeroProps = {
  heroBG: StaticImageData,
  heroContent: {
    h1: string;
    text: string;
  }
}

function Hero({ heroBG, heroContent }: HeroProps) {
  const t = useTranslations('Home.hero')
  return (
    <section className='hero'>
      <h1>{heroContent.h1}</h1>
      <p>{heroContent.text}</p>
      <div className="hero__img">
        <Image src={heroBG} alt='home hero bg' />
      </div>
    </section>
  );
}

export default Hero;