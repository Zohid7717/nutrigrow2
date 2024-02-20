import type { Metadata } from "next";
import { Inter, Open_Sans, DM_Sans, Lato } from "next/font/google";
import "./globals.css";
import TheHeader from '@/components/TheHeader/TheHeader';
import TheFooter from '@/components/TheFooter/TheFooter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NutriGrow",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body>
        <TheHeader />
        <main className='container'>
          {children}
        </main>
        <TheFooter />
      </body>
    </html>
  );
}