import createMiddleware from 'next-intl/middleware';
import { locales, pathnames, localePrefix } from "./config";

export default createMiddleware({
  defaultLocale: 'uz',
  locales,
  pathnames,
  localePrefix
});
 
export const config = {
  matcher: [
    '/',
    '/(ru|uz|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};