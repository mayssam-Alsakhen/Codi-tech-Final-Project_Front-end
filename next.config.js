/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  devIndicators:{
    buildActivity : false
  },
  images: {
    domains: ['localhost'],
  }
}


module.exports = nextConfig
