/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.vercel.com", "mdbcdn.b-cdn.net"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig
