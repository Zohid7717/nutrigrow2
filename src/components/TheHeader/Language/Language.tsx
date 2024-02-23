'use client'
 /* eslint-disable */
import '../styles/Navigation.scss'

import { usePathname, useRouter } from '@/navigation';
function Language() {
  const router = useRouter()
  const pathname = usePathname()
  const changeLang = (arg: string) => {
    router.replace(pathname, { locale: arg })
  }

  return (
    <div className="lang">
      <button onClick={() => changeLang('uz')}>O'Z</button>
      <button onClick={() => changeLang('en')}>EN</button>
      <button onClick={() => changeLang('ru')}>РУ</button>
    </div>
  );
}

export default Language;