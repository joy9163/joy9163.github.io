import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = { title: 'About me' }

export default function About() {
  return (
    <SiteLayout
      title="About me"
      lead="Atmospheric chemistry · climate extremes · environmental data science"
    >
      <AboutContent />
    </SiteLayout>
  )
}
