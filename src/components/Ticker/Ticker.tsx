'use client'
import img1 from "../../../public/image/partners/Ark_Global_Kimya.png";
import img2 from "../../../public/image/partners/LogoBook.png";
import img3 from "../../../public/image/partners/ishraqAlminara-new.png";
import img4 from "../../../public/image/partners/tarding house.png";
import Image from 'next/image';
import '../ComponentsStyle/Ticker.scss'

const images = [img1, img2, img3, img4]

function Ticker() {

  return (
    <div className='ticker'>
      <div className="ticker__wrap">
        <div className="ticker__items">
          {images.map((img, index) => (
            <div key={index} className='ticker__item'>
              <Image
                src={img}
                alt='ticket image'
              />
            </div>
          ))}
        </div>
        <div className="ticker__items">
          {images.map((img, index) => (
            <div key={index} className='ticker__item'>
              <Image
                src={img}
                alt='ticket image'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ticker;