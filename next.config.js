/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  env: {
    navbarId: "navbar-id",
  },
};

module.exports = nextConfig;
