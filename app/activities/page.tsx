import type { Metadata } from 'next'
import Image from 'next/image'
import SiteLayout from '@/components/SiteLayout'

export const metadata: Metadata = { title: 'Activities' }

type Entry = {
  title: string
  organization: string
  period: string
  location?: string
  description: string
  items?: string[]
  photos?: string[]
}

const competitions: Entry[] = [
  {
    title: 'China International College Students’ Innovation Competition (CICSIC)',
    organization: 'First Prize, Finland Regional',
    period: 'Aug 2026',
    location: 'Finland',
    description:
      'First Prize at the Finland regional for project Sentinella, an integrated digital-twin system for hyperlocal-scale climate and public-health risk (US$3,000 award).',
  },
  {
    title: '2025 Asian Climate-SDG Technology Innovation Hackathon',
    organization: 'Finalist; invited presenter at COP30',
    period: '2025',
    location: 'Hong Kong & Belém, Brazil (COP30)',
    description:
      'Selected as a finalist and invited to showcase Sentinella at a roadshow in Hong Kong, then to present at the UN Climate Change Conference (COP30) in Belém.',
    items: [
      'Developed an urban digital-twin platform designed to safeguard public health against climate-related risks',
      'Integrated hydrodynamic, epidemiological, and community intelligence data',
      'Built decision-support tooling for flooding and epidemic prevention',
    ],
    photos: [
      '/activities/cop30/photo1.jpg',
      '/activities/cop30/photo2.jpg',
      '/activities/cop30/photo3.jpg',
      '/activities/cop30/photo4.jpg',
    ],
  },
]

const engagement: Entry[] = [
  {
    title: 'UNITAR & Nanjing University UN Immersion Programme',
    organization: 'Selected Delegate',
    period: 'Jul 2026',
    location: 'Palais des Nations, Geneva',
    description:
      'Completed a multilateral diplomacy and global governance immersion, including UN system briefings and engagement with Geneva-based international organizations.',
  },
]

const service: Entry[] = [
  {
    title: 'Standing Representative',
    organization: 'Nanjing University Student Representative Congress',
    period: '2024 – 2026',
    description:
      'Serve three consecutive terms (2024, 2025, and 2026), including the 28th and 29th congresses. Represent student interests and contribute to university-level student affairs and campus initiatives.',
    photos: [
      '/activities/student-congress/photo1.jpg',
      '/activities/student-congress/photo2.jpg',
    ],
  },
  {
    title: 'Class Monitor',
    organization: 'Nanjing–Helsinki Institute in Atmospheric and Earth System Sciences',
    period: '09/2024 – 09/2025',
    description:
      'Organised academic, social, and intercollegiate activities for undergraduate students.',
    photos: ['/activities/class-monitor/photo1.jpg'],
  },
  {
    title: 'Outstanding Research Report',
    organization: 'Nanjing University Summer Social Practice Program',
    period: '2024',
    description:
      'Awarded Outstanding Research Report in the university summer social practice program.',
    photos: ['/activities/class-monitor/photo2.jpg'],
  },
  {
    title: 'Student Ambassador',
    organization: 'Global Training Initiative, North Carolina State University',
    period: '02/2025 – Present',
    description:
      'Facilitate communication between faculty and students and support international academic engagement.',
    photos: ['/activities/ncsu/photo1.JPG'],
  },
  {
    title: 'Guzheng Performer',
    organization: 'Nanjing University Traditional Chinese Music Ensemble',
    period: '10/2024 – Present',
    description:
      'Perform as a guzheng player in the university ensemble, contributing to the preservation and promotion of traditional Chinese music.',
    photos: [
      '/activities/guzheng/photo1.jpg',
      '/activities/guzheng/photo2.jpg',
      '/activities/guzheng/photo3.jpg',
    ],
  },
]

function Photos({ photos, alt }: { photos?: string[]; alt: string }) {
  if (!photos || photos.length === 0) return null
  const n = Math.min(photos.length, 4)
  return (
    <div className={`photo-grid photo-grid--${n}`}>
      {photos.map((src, i) => (
        <figure key={src}>
          <Image src={src} alt={`${alt} — photo ${i + 1}`} width={640} height={480} />
        </figure>
      ))}
    </div>
  )
}

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="archive__list">
      {entries.map((entry) => (
        <li className="archive__item" key={entry.title}>
          <h3 className="archive__item-title">{entry.title}</h3>
          <p className="archive__item-meta">
            {entry.organization} · {entry.period}
            {entry.location ? ` · ${entry.location}` : ''}
          </p>
          <p className="archive__item-excerpt">{entry.description}</p>
          {entry.items && (
            <ul style={{ fontSize: '0.88rem', marginBottom: '0.4em' }}>
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <Photos photos={entry.photos} alt={entry.title} />
        </li>
      ))}
    </ul>
  )
}

export default function Activities() {
  return (
    <SiteLayout
      title="Activities"
      lead="Competitions, international engagement, student leadership, and social practice alongside research."
    >
      <h2>Competitions</h2>
      <EntryList entries={competitions} />

      <h2>International engagement</h2>
      <EntryList entries={engagement} />

      <h2>Service &amp; leadership</h2>
      <EntryList entries={service} />

      <h2>Outside work</h2>
      <p>Guzheng · badminton · gym.</p>
    </SiteLayout>
  )
}
