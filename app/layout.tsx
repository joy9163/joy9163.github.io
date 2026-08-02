import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Jiayin Zhang',
    template: '%s | Jiayin Zhang',
  },
  description:
    'Jiayin Zhang — undergraduate researcher in Atmospheric Science at Nanjing University. Atmospheric chemistry, climate extremes, and environmental data science.',
  keywords:
    'Jiayin Zhang, atmospheric science, atmospheric chemistry, climate extremes, environmental data science, machine learning, Nanjing University, HKUST',
  authors: [{ name: 'Jiayin Zhang' }],
  creator: 'Jiayin Zhang',
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
