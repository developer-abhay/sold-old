/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.brandfetch.io"], // Add the external domain here
  },
};

export default nextConfig;
