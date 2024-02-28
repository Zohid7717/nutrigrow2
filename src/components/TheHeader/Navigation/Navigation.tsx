'use client'
import Link from 'next/link';
import '../styles/Navigation.scss'
import { usePathname } from 'next/navigation';
import Language from '../Language/Language';
import { useEffect, useState } from 'react';
type NavigationProps = {
  navItems: {
    label: string;
    href: string;
  }[]
}

function Navigation({ navItems }: NavigationProps) {
  const [activeNavWrap, setActiveNavWrap] = useState(false)
  const [lang, setLang] = useState<string | null | undefined>('')
  const pathname = usePathname()
  const htmlElement = document.querySelector('html')
  const langValue = htmlElement?.getAttribute('lang')
  useEffect(() => {
    if (activeNavWrap) {
      document.body.classList.add('body-fixed')
    } else {
      document.body.classList.remove('body-fixed')
    }
    setLang(langValue)
  }, [activeNavWrap, langValue])
  console.log(langValue, pathname)
  return <div className="navigation">
    <div className={activeNavWrap ? "burger active-burger" : "burger"} onClick={() => setActiveNavWrap(!activeNavWrap)}>
      <span></span>
    </div>
    <div className={activeNavWrap ? "nav-wrap active-nav-wrap" : "nav-wrap"}>
      <nav>
        {navItems.map((link, index) => {
          const path = link.href=== '/' ? `/${lang}` : `/${lang}${link.href}`
          const isActive = pathname === path
          return (
            <Link key={index} href={link.href} onClick={() => setActiveNavWrap(false)} className={isActive ? 'activeNav' : ''}>{link.label}</Link>
          )
        })}
      </nav>
      <Language />
    </div>
  </div>
}

export default Navigation;