import type { Metadata } from 'next'
import Image from 'next/image'
import SiteLayout from '@/components/SiteLayout'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = { title: 'Publications' }

const journalArticles = [
  {
    authors: 'Aguilos, M., Zhang, J., Belgado, M. L., Sun, G., McNulty, S., & King, J.',
    year: '2025',
    title:
      'Determining early warning thresholds to detect tree mortality risk in a southeastern U.S. bottomland hardwood wetland',
    venue: 'Forests, 16(8), 1255',
    doi: 'https://doi.org/10.3390/f16081255',
    summary:
      'Establishes early-warning thresholds for tree-mortality risk in southeastern U.S. bottomland hardwood wetlands using hydrological stress indicators and carbon-flux measurements.',
  },
]

const presentations = [
  {
    authors: 'Zhang, J.',
    date: 'April 2026',
    title:
      'Characterization of summer hourly extreme precipitation and attribution of anthropogenic discharge in the middle and lower Yangtze River Basin',
    venue: 'Second AtmosFuture Forum, Suzhou, China',
    type: 'Oral presentation',
  },
  {
    authors: 'Zhang, J.',
    date: 'May 2025',
    title:
      'Characterization of summer hourly extreme precipitation and attribution of anthropogenic discharge in the middle and lower Yangtze River Basin',
    venue: 'First Nanjing University Atmospheric Sciences Top Forum, Nanjing, China',
    type: 'Oral presentation',
    photo: '/publications/nanjing-forum-2025/photo1.jpg',
  },
  {
    authors: 'Aguilos, M., Zhang, J., Belgado, M. L., Sun, G., & King, J.',
    date: 'October 2025',
    title:
      'Linking hydrological stress to ghost forest formation: thresholds for tree mortality in coastal ecosystems',
    venue: 'AmeriFlux Annual Meeting, Tucson, USA',
    type: 'Poster',
  },
  {
    authors: 'Aguilos, M., Sun, G., Liu, N., Zhang, J., Belgado, M., McNulty, S., & King, J.',
    date: 'December 2025',
    title:
      'Modeling evapotranspiration dynamics across southeastern U.S. ecosystems using flux data and machine learning',
    venue: 'AGU Annual Meeting, New Orleans, USA',
    type: 'Poster',
  },
]

export default function Publications() {
  return (
    <SiteLayout
      title="Publications"
      lead="Published journal articles and conference presentations."
    >
      <h2>Journal articles</h2>
      <ul className="archive__list">
        {journalArticles.map((item) => (
          <li className="archive__item" key={item.title}>
            <h3 className="archive__item-title">
              <a href={item.doi} target="_blank" rel="noreferrer noopener">
                {item.title}
              </a>
            </h3>
            <p className="archive__item-meta">
              {item.authors} ({item.year}). <em>{item.venue}</em>.
            </p>
            <p className="archive__item-excerpt">{item.summary}</p>
            <div className="archive__item-links">
              <a href={item.doi} target="_blank" rel="noreferrer noopener">
                <ExternalLink size={14} />
                doi.org/10.3390/f16081255
              </a>
            </div>
          </li>
        ))}
      </ul>

      <h2>Conference presentations</h2>
      <ul className="archive__list">
        {presentations.map((item) => (
          <li className="archive__item" key={`${item.venue}-${item.date}`}>
            <h3 className="archive__item-title">{item.title}</h3>
            <p className="archive__item-meta">
              {item.authors} · <em>{item.venue}</em> · {item.type} · {item.date}
            </p>
            {item.photo && (
              <div className="photo-grid photo-grid--1">
                <figure>
                  <Image src={item.photo} alt={item.title} width={720} height={540} />
                </figure>
              </div>
            )}
          </li>
        ))}
      </ul>
    </SiteLayout>
  )
}
