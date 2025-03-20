/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enable experimental Turbopack features
    turbo: {
      // Optional: Enable incremental type checking (could be slower in some cases)
      typecheck: true,
    },
  },
};

export default nextConfig; 