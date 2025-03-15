/** @type {import('next').NextConfig} */
import { i18n } from './next-i18next.config';

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

export default nextConfig;
