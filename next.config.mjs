/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    COOKIE_NAME: process.env.COOKIE_NAME,
    // MIDTRANS_CLIENT_KEY: process.env.MIDTRANS_CLIENT_KEY,
  },
};

export default nextConfig;
