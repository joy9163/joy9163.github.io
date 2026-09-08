import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Jiayin Zhang',
    template: '%s | Jiayin Zhang',
  },
  description:
    'Jiayin Zhang — undergraduate visiting research intern at Stanford University, in the Sino-Finnish dual-degree program at Nanjing University and the University of Helsinki. Atmospheric chemistry, urban air quality, BVOCs, and observation-driven machine learning.',
  keywords:
    'Jiayin Zhang, atmospheric science, atmospheric chemistry, urban air quality, BVOCs, machine learning, Stanford University, Nanjing University, University of Helsinki',
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
