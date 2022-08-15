/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [],
  },
  env: {
    BASE_API_ROUTE: "http://localhost:8000/api/",
  },
}
