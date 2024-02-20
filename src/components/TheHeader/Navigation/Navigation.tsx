'use client'
import Link from 'next/link';
import '../styles/Navigation.scss'
import { usePathname } from 'next/navigation';
import Language from '../Language/Language';
import { useState } from 'react';
type NavigationProps = {
  navItems: {
    label: string;
    href: string;
  }[]
}

function Navigation({ navItems }: NavigationProps) {
  const [activeNavWrap, setActiveNavWrap]=useState(false)
  const pathname = usePathname()
  return <div className="navigation">
    <div className="burger" onClick={()=>setActiveNavWrap(!activeNavWrap)}>
      <span></span>
    </div>
    <div className={activeNavWrap ? "nav-wrap active-nav-wrap" : "nav-wrap"}>
      <nav>
        {navItems.map((link, index) => {
          const isActive = pathname === link.href
          return (
            <Link key={index} href={link.href} onClick={() =>setActiveNavWrap(false)} className={isActive ? 'activeNav' : ''}>{link.label}</Link>
          )
        })}
      </nav>
      <Language />
    </div>
  </div>
}

export default Navigation;