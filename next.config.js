/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is now the default in Next.js 13+, no need for experimental flag
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '',
  // Disable React strict mode for better GitHub Pages compatibility
  reactStrictMode: false,
  // Disable server features
  swcMinify: true
}

module.exports = nextConfig