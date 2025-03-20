/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This setting ensures that the site works with Netlify
  trailingSlash: true,
};

module.exports = nextConfig; 