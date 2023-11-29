/** @type {import('next').NextConfig} */
const nextConfig = {
  images: [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '3000',
      pathname: '/images/**',
    },
    {
      protocol: 'https',
      hostname: 'https://psonetto-portfolio.vercel.app',
      port: '',
      pathname: '/assets/**',
    },
  ],
};

module.exports = nextConfig;
