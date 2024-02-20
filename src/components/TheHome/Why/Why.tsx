import Image from 'next/image';
import whyBG from "../../../../public/image/bg/why-bg.jpg";
import { useTranslations } from 'next-intl';
import WhySwiper from '../WhySwiper/WhySwiper';
import Link from 'next/link';
import playBtn from "../../../../public/image/icon/Button Play.svg"
import '../styles/Why.scss'


function Why() {
  const t = useTranslations('Home.why')
  
  const swItems = [
    { title: t('advantage.item-1.title'), content: t('advantage.item-1.content') },
    { title: t('advantage.item-2.title'), content: t('advantage.item-2.content') },
    { title: t('advantage.item-3.title'), content: t('advantage.item-3.content') },
    { title: t('advantage.item-4.title'), content: t('advantage.item-4.content') },
  ]
  return (
    <div className='why'>
      <div className="why__img">
        <Image src={whyBG} alt='bg' />
      </div>
      <div className="why__content">
        <div className="why__slider">
          <h2>{t('h2')}</h2>
          <div className="why__slider-box">
            <WhySwiper swItems={swItems} />
          </div>
        </div>
        <div className="why__content-btn">
          <Link href="#">{ t('content-btn.a')}</Link>
          <div>
            <Link href='#'>
              <Image src={playBtn} alt="play btn img" />
            </Link>
            <span>{t('content-btn.span') }</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;