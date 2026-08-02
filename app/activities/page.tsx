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
    title: '2025 Asian Climate-SDG Technology Innovation Hackathon',
    organization: 'Finalist',
    period: '2025',
    location: 'Hong Kong & Brazil (COP30)',
    description:
      'Selected as a finalist and invited to showcase the project at a roadshow in Hong Kong, then to participate in the UN Climate Change Conference (COP30) in Brazil.',
    items: [
      'Developed an urban digital twin platform designed to safeguard public health against climate-related risks',
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

const service: Entry[] = [
  {
    title: 'Student Ambassador',
    organization: 'Global Training Initiative, North Carolina State University',
    period: '02/2025 – Present',
    description:
      'Manage communication between faculty and students, facilitating international academic exchange and cross-cultural initiatives.',
    photos: ['/activities/ncsu/photo1.JPG'],
  },
  {
    title: 'Standing Representative',
    organization: 'Nanjing University Student Representative Congress',
    period: '10/2024 – Present',
    description:
      'Advocate for student interests in university governance and contribute to initiatives that improve the campus environment.',
    photos: [
      '/activities/student-congress/photo1.jpg',
      '/activities/student-congress/photo2.jpg',
    ],
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
  {
    title: 'Class Monitor',
    organization: 'Nanjing–Helsinki Institute in Atmospheric and Earth System Science',
    period: '09/2024 – Present',
    description:
      'Organised over ten activities, including class reunions, sports competitions, and intercollegiate bonding events.',
    photos: [
      '/activities/class-monitor/photo1.jpg',
      '/activities/class-monitor/photo2.jpg',
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
      lead="Student leadership, cultural activities, competitions, and volunteering alongside research."
    >
      <h2>Competitions</h2>
      <EntryList entries={competitions} />

      <h2>Service &amp; leadership</h2>
      <EntryList entries={service} />

      <h2>Volunteering</h2>
      <p>
        Over <strong>200 hours</strong> of volunteer service to date, across community
        engagement and outreach programmes.
      </p>

      <h2>Outside work</h2>
      <p>Guzheng · badminton · gym.</p>
    </SiteLayout>
  )
}
