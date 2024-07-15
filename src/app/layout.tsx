import { ReactNode } from 'react'

const locales = ['en', 'uz', 'ru']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return children
}