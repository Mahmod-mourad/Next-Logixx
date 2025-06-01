/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_HOST: 'smtp.gmail.com',
    EMAIL_PORT: '465',
    EMAIL_USER: 'nextlogixx1@gmail.com',
    EMAIL_PASS: 'mddo rorc qguh zqzq',
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 