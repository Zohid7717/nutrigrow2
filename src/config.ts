import { Pathnames } from "next-intl/navigation";

export const locales = ['en', 'uz', 'ru'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    uz: '/uzpathnames',
    ru: '/rupathnames'
  }
} satisfies Pathnames<typeof locales>

export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames