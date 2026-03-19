/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is now the default in Next.js 13+, no need for experimental flag
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig