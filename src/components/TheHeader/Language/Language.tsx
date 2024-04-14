'use client'
/* eslint-disable */

import '../styles/Navigation.scss'

import { usePathname, useRouter } from '@/navigation';
import { useEffect, useState } from 'react';


function Language() {
  const [lang, setLang] = useState<string | null | undefined>('')
  const router = useRouter()
  const pathname = usePathname()
  const changeLang = (arg: string) => {
    router.replace(pathname, { locale: arg })
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    const langValue = htmlElement?.getAttribute('lang')
    setLang(langValue)
  }, [changeLang])

  return (
    <div className="lang">
      <button onClick={() => changeLang('uz')} className={lang === 'uz' ? 'active-lang' : ''}>O'Z</button>
      <button onClick={() => changeLang('en')} className={lang === 'en' ? 'active-lang' : ''}>EN</button>
      <button onClick={() => changeLang('ru')} className={lang === 'ru' ? 'active-lang' : ''}>РУ</button>
    </div>
  );
}

export default Language;