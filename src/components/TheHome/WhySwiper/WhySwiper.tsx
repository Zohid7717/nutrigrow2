'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import { useTranslations } from 'next-intl';
import '../styles/WhySwiper.scss'


type WhySwiperProps = {
  swItems: {
    title: string;
    content: string;
  }[]
}

function WhySwiper({ swItems }: WhySwiperProps) {
  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, Pagination]}
    >
      {swItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="sw-slide">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default WhySwiper;