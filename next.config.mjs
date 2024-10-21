/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
        port: "",
        pathname: "/**", // Allow all paths under the hostname
      },
      {
        protocol: "https",
        hostname: "i.gadgets360cdn.com",
        port: "",
        pathname: "/**", // Allow all paths under the hostname
      },
    ],
  },
};

export default nextConfig;
