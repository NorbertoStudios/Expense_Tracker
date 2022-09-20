/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["assets.vercel.com", "mdbcdn.b-cdn.net"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig
