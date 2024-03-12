import { unstable_setRequestLocale } from 'next-intl/server';

function Partners({ params: { locale } }: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  return (
    <div>
      <h1>Извините за неудобство. Мы работаем над обновлением этой страницы</h1>
    </div>
  );
}

export default Partners;