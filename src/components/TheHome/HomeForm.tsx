import { useTranslations } from 'next-intl';
import Link from 'next/link';
import './styles/HomeContact.scss'
import ContactForm from '../ContactForm/ContactForm';

async function HomeForm() {
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
            <Link href="tel:(101) 222 123 456">(101) 222 123 456</Link>
          </p>
          <p>
            <span>EMAIL</span>
            <Link href="mailto:company@agria.com">company@agria.com</Link>
          </p>
        </div>
      </div>
      <ContactForm formTranslations={formTranslations} />
    </div>
  );
}

export default HomeForm;