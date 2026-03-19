/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is now the default in Next.js 13+, no need for experimental flag
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: ''
}

module.exports = nextConfig