import TheHeader from '@/components/TheHeader/TheHeader';
import TheFooter from '@/components/TheFooter/TheFooter';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useMessages, NextIntlClientProvider, useTranslations } from 'next-intl';
import "./globals.css";

const locales = ['en', 'uz', 'ru']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations('Home.Meta')
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords')
  }
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const message = useMessages()
  unstable_setRequestLocale(locale)
  const t = useTranslations('Home')
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={message}>
          <TheHeader params={locale} />
          <main>
            <div className="container">
              {children}
            </div>
          </main>
          <TheFooter params={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}