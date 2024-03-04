import { useTranslations } from 'next-intl';
import Link from 'next/link';
import './styles/HomeContact.scss'
import ContactForm from '../ContactForm/ContactForm';

async function ContactSection() {
  const t = useTranslations('Home.Contact')
  const t2 = useTranslations('ContactForm')
  const formTranslations = {
    h3: t2('h3'),
    requiredMessage: t2('required-message'),
    namePlaceholder: t2('name-placeholder'),
    phonePlaceholder: t2('phone-placeholder'),
    questionPlaceholder: t2('question-placeholder'),
    button: t2('button')
  }

  return (
    <div className='home-form'>
      <div className="home-form__text">
        <h3>
          {t('h3')}
        </h3>
        <h4>
          {t('h4')}
        </h4>
        <p>
          {t('p')}
        </p>
        <div className="home-form__contacts">
          <p>
            <span>PHONE</span>
            <Link href="tel:+998998322220">+998 99 832 2220</Link>
            <Link href="tel:+998988772020">+998 98 877 2020</Link>
            <Link href="tel:+998957112020">+998 95 711 2020</Link>
          </p>
          <p>
            <span>EMAIL</span>
            <Link href="mailto:nutrigrow2020@gmail.com">nutrigrow2020@gmail.com</Link>
          </p>
        </div>
      </div>
      <ContactForm formTranslations={formTranslations} />
    </div>
  );
}

export default ContactSection;