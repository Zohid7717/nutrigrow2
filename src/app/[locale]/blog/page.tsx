// import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations('Blog.Meta')
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords')
  }
}
function Blog({ params: { locale } }: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Blog')
  return (
    <div>
      <h1>Извините за неудобство. Мы работаем над обновлением этой страницы</h1>
    </div>
  );
}


export default Blog;