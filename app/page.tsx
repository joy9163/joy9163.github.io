import SiteLayout from '@/components/SiteLayout'
import AboutContent from '@/components/AboutContent'

export default function Home() {
  return (
    <SiteLayout
      title="About me"
    >
      <AboutContent />
    </SiteLayout>
  )
}
