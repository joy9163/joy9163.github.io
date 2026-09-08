import SiteLayout from '@/components/SiteLayout'
import AboutContent from '@/components/AboutContent'

export default function Home() {
  return (
    <SiteLayout
      title="About me"
      lead="Atmospheric chemistry · urban air quality · BVOCs · observation-driven ML"
    >
      <AboutContent />
    </SiteLayout>
  )
}
