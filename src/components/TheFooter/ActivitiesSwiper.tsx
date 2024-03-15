'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import img1 from "../../../public/image/bg/img1.jpg";
import img2 from "../../../public/image/bg/img2.jpg";
import Link from 'next/link';

function ActivitiesSwiper() {
  return (
    <div className='activitues-swiper'>

      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        loop={true}
        slidesPerView={2}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="activitues-swiper__slide">
            <Link href='#'>
              <Image src={img1} alt='img1' width={70} height={70} />
            </Link>
            <div className="activitues-swiper__slide-text">
              <p>October 28, 2022</p>
              <h4>Placerat vestibulum lectus mauris ultrices</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="activitues-swiper__slide">
            <Link href='#'>
              <Image src={img2} alt='img2' width={70} height={70} />
            </Link>
            <div className="activitues-swiper__slide-text">
              <p>October 28, 2022</p>
              <h4>Placerat vestibulum lectus mauris ultrices</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="activitues-swiper__slide">
            <Link href='#'>
              <Image src={img1} alt='img1' width={70} height={70} />
            </Link>
            <div className="activitues-swiper__slide-text">
              <p>October 28, 2022</p>
              <h4>Placerat vestibulum lectus mauris ultrices</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="activitues-swiper__slide">
            <Link href='#'>
              <Image src={img2} alt='img1' width={70} height={70} />
            </Link>
            <div className="activitues-swiper__slide-text">
              <p>October 28, 2022</p>
              <h4>Placerat vestibulum lectus mauris ultrices</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ActivitiesSwiper;