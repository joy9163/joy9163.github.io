import SiteLayout from '@/components/SiteLayout'
import AboutContent from '@/components/AboutContent'

export default function Home() {
  return (
    <SiteLayout
      title="About me"
      lead="Atmospheric chemistry · climate extremes · environmental data science"
    >
      <AboutContent />
    </SiteLayout>
  )
}
