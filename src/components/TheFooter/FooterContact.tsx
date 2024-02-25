import { useTranslations } from 'next-intl';
import Link from 'next/link';
import './styles/FooterContact.scss'

function FooterContact() {
  const t = useTranslations('Footer.Contacts')

  return (
    <div className='footer-contact'>
      <h3>{t('h3')}</h3>
      <div className="footer-contact__items">
        <Link href="tel:+998988772020">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9609 15.6172L19.0234 19.5625C18.9062 20.1484 18.4375 20.5391 17.8516 20.5391C8.00781 20.5 0 12.4922 0 2.64844C0 2.0625 0.351562 1.59375 0.9375 1.47656L4.88281 0.539062C5.42969 0.421875 6.01562 0.734375 6.25 1.24219L8.08594 5.5C8.28125 6.00781 8.16406 6.59375 7.73438 6.90625L5.625 8.625C6.95312 11.3203 9.14062 13.5078 11.875 14.8359L13.5938 12.7266C13.9062 12.3359 14.4922 12.1797 15 12.375L19.2578 14.2109C19.7656 14.4844 20.0781 15.0703 19.9609 15.6172Z" fill="#079460" />
          </svg>
          <p>+998 98 877 2020</p>
        </Link>
        <Link href="tel:+998998322220">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9609 15.6172L19.0234 19.5625C18.9062 20.1484 18.4375 20.5391 17.8516 20.5391C8.00781 20.5 0 12.4922 0 2.64844C0 2.0625 0.351562 1.59375 0.9375 1.47656L4.88281 0.539062C5.42969 0.421875 6.01562 0.734375 6.25 1.24219L8.08594 5.5C8.28125 6.00781 8.16406 6.59375 7.73438 6.90625L5.625 8.625C6.95312 11.3203 9.14062 13.5078 11.875 14.8359L13.5938 12.7266C13.9062 12.3359 14.4922 12.1797 15 12.375L19.2578 14.2109C19.7656 14.4844 20.0781 15.0703 19.9609 15.6172Z" fill="#079460" />
          </svg>
          <p>+998 99 832 2220</p>
        </Link>
        <Link href="mailto:nutrigrow2020@gmail.com">
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11.25C9.33594 11.25 8.67188 11.0547 8.125 10.625L0 4.29688V13.125C0 14.1797 0.820312 15 1.875 15H18.125C19.1406 15 20 14.1797 20 13.125V4.29688L11.8359 10.625C11.2891 11.0547 10.625 11.25 10 11.25ZM0.625 3.20312L8.90625 9.64844C9.53125 10.1172 10.4297 10.1172 11.0547 9.64844L19.3359 3.20312C19.7266 2.89062 20 2.38281 20 1.875C20 0.859375 19.1406 0 18.125 0H1.875C0.820312 0 0 0.859375 0 1.875C0 2.38281 0.234375 2.89062 0.625 3.20312Z" fill="#079460" />
          </svg>
          <p>nutrigrow2020@gmail.com</p>
        </Link>
        <Link href="https://maps.app.goo.gl/itHqdCEYJHbc6kyF9">
          <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5625 20.0312C4.53125 17.4922 0 11.4375 0 8C0 3.85938 3.32031 0.5 7.5 0.5C11.6406 0.5 15 3.85938 15 8C15 11.4375 10.4297 17.4922 8.39844 20.0312C7.92969 20.6172 7.03125 20.6172 6.5625 20.0312ZM7.5 10.5C8.86719 10.5 10 9.40625 10 8C10 6.63281 8.86719 5.5 7.5 5.5C6.09375 5.5 5 6.63281 5 8C5 9.40625 6.09375 10.5 7.5 10.5Z" fill="#079460" />
          </svg>
          <p> 12b Admiralty way, Lekki, Lagos</p>
        </Link>
      </div>
    </div>
  );
}

export default FooterContact;