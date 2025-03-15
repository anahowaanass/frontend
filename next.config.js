/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1', 'localhost', 'frontend-seven-iota-51.vercel.app'],
    remotePatterns: [
      {
        hostname: '**.cyber-scale.me',
      },
      {
        hostname: '**.vercel.app', // Allow remote images from Vercel domain
      },
    ],
  },
  i18n,
};

module.exports = nextConfig;
