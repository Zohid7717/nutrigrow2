import Image from 'next/image';
import logo from '../../../public/image/icon/logo.svg'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import './styles/Social.scss'


function Social({ params }: Readonly<{
  params: string
}>) {
  const t = useTranslations('Footer.social')
  return (
    <div className='social'>
      <div className="social__logo">
        <Link href={`/${params}.html`}>
          <Image src={logo} alt='logo' />
        </Link>
      </div>
      <p>{t('p')}</p>
      <div className="social__items">
        <Link href='#'><svg width="12" height="20" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8984 11.75L11.4453 8.15625H7.96875V5.8125C7.96875 4.79688 8.4375 3.85938 10 3.85938H11.6016V0.773438C11.6016 0.773438 10.1562 0.5 8.78906 0.5C5.9375 0.5 4.0625 2.25781 4.0625 5.38281V8.15625H0.859375V11.75H4.0625V20.5H7.96875V11.75H10.8984Z" fill="#079460" />
        </svg>
        </Link>
        <Link href='https://wa.me/+998988772020'><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.8438 3.32812C13.2422 1.6875 11.0547 0.75 8.71094 0.75C3.94531 0.75 0.0390625 4.65625 0.0390625 9.42188C0.0390625 10.9844 0.46875 12.4688 1.21094 13.7578L0 18.25L4.57031 17.0781C5.85938 17.7422 7.26562 18.1328 8.71094 18.1328C13.5156 18.1328 17.5 14.2266 17.5 9.46094C17.5 7.11719 16.4844 4.96875 14.8438 3.32812ZM8.71094 16.6484C7.42188 16.6484 6.17188 16.2969 5.03906 15.6328L4.80469 15.4766L2.07031 16.2188L2.8125 13.5625L2.61719 13.2891C1.91406 12.1172 1.52344 10.7891 1.52344 9.42188C1.52344 5.47656 4.76562 2.23438 8.75 2.23438C10.6641 2.23438 12.4609 2.97656 13.8281 4.34375C15.1953 5.71094 16.0156 7.50781 16.0156 9.46094C16.0156 13.4062 12.6953 16.6484 8.71094 16.6484ZM12.6953 11.2578C12.4609 11.1406 11.4062 10.6328 11.2109 10.5547C11.0156 10.4766 10.8594 10.4375 10.7031 10.6719C10.5859 10.8672 10.1562 11.375 10.0391 11.5312C9.88281 11.6484 9.76562 11.6875 9.57031 11.5703C8.28125 10.9453 7.46094 10.4375 6.60156 8.99219C6.36719 8.60156 6.83594 8.64062 7.22656 7.82031C7.30469 7.66406 7.26562 7.54688 7.22656 7.42969C7.1875 7.3125 6.71875 6.25781 6.5625 5.82812C6.36719 5.39844 6.21094 5.4375 6.05469 5.4375C5.9375 5.4375 5.78125 5.4375 5.66406 5.4375C5.50781 5.4375 5.27344 5.47656 5.07812 5.71094C4.88281 5.94531 4.33594 6.45312 4.33594 7.50781C4.33594 8.60156 5.07812 9.61719 5.19531 9.77344C5.3125 9.89062 6.71875 12.0781 8.90625 13.0156C10.2734 13.6406 10.8203 13.6797 11.5234 13.5625C11.9141 13.5234 12.7734 13.0547 12.9688 12.5469C13.1641 12.0391 13.1641 11.6094 13.0859 11.5312C13.0469 11.4141 12.8906 11.375 12.6953 11.2578Z" fill="#079460" />
        </svg>
        </Link>
        <Link href='http://t.me/+998988772020'>
          <svg fill="#079460" width="800px" height="800px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z" /></svg>
        </Link>
        <Link href='http://instagram.com/nutrigrow.uz'><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g >
            <path d="M8.75 6.00781C6.25 6.00781 4.25781 8.03906 4.25781 10.5C4.25781 13 6.25 14.9922 8.75 14.9922C11.2109 14.9922 13.2422 13 13.2422 10.5C13.2422 8.03906 11.2109 6.00781 8.75 6.00781ZM8.75 13.4297C7.14844 13.4297 5.82031 12.1406 5.82031 10.5C5.82031 8.89844 7.10938 7.60938 8.75 7.60938C10.3516 7.60938 11.6406 8.89844 11.6406 10.5C11.6406 12.1406 10.3516 13.4297 8.75 13.4297ZM14.4531 5.85156C14.4531 6.4375 13.9844 6.90625 13.3984 6.90625C12.8125 6.90625 12.3438 6.4375 12.3438 5.85156C12.3438 5.26562 12.8125 4.79688 13.3984 4.79688C13.9844 4.79688 14.4531 5.26562 14.4531 5.85156ZM17.4219 6.90625C17.3438 5.5 17.0312 4.25 16.0156 3.23438C15 2.21875 13.75 1.90625 12.3438 1.82812C10.8984 1.75 6.5625 1.75 5.11719 1.82812C3.71094 1.90625 2.5 2.21875 1.44531 3.23438C0.429688 4.25 0.117188 5.5 0.0390625 6.90625C-0.0390625 8.35156 -0.0390625 12.6875 0.0390625 14.1328C0.117188 15.5391 0.429688 16.75 1.44531 17.8047C2.5 18.8203 3.71094 19.1328 5.11719 19.2109C6.5625 19.2891 10.8984 19.2891 12.3438 19.2109C13.75 19.1328 15 18.8203 16.0156 17.8047C17.0312 16.75 17.3438 15.5391 17.4219 14.1328C17.5 12.6875 17.5 8.35156 17.4219 6.90625ZM15.5469 15.6562C15.2734 16.4375 14.6484 17.0234 13.9062 17.3359C12.7344 17.8047 10 17.6875 8.75 17.6875C7.46094 17.6875 4.72656 17.8047 3.59375 17.3359C2.8125 17.0234 2.22656 16.4375 1.91406 15.6562C1.44531 14.5234 1.5625 11.7891 1.5625 10.5C1.5625 9.25 1.44531 6.51562 1.91406 5.34375C2.22656 4.60156 2.8125 4.01562 3.59375 3.70312C4.72656 3.23438 7.46094 3.35156 8.75 3.35156C10 3.35156 12.7344 3.23438 13.9062 3.70312C14.6484 3.97656 15.2344 4.60156 15.5469 5.34375C16.0156 6.51562 15.8984 9.25 15.8984 10.5C15.8984 11.7891 16.0156 14.5234 15.5469 15.6562Z" fill="#079460" />
          </g>
        </svg></Link>
      </div>
    </div>
  );
}

export default Social;