'use client'

import Link from 'next/link'
import { PersonLink } from '@/lib/people'

const education = [
  {
    period: '09/2023 – Present',
    title: 'B.S. in Atmospheric Science',
    subtitle: 'Nanjing University and University of Helsinki',
    note: 'Sino-Finnish dual-degree program, Nanjing–Helsinki Institute in Atmospheric and Earth System Sciences. Overall GPA: 4.58/5.00 (91.6/100)',
  },
  {
    period: '09/2025 – 12/2025',
    title: 'Undergraduate Exchange Program',
    subtitle: 'The Hong Kong University of Science and Technology',
    note: 'Department of Chemistry',
  },
]

export default function AboutContent() {
  return (
    <>
      <p>
        I am an undergraduate researcher in atmospheric science in the Sino-Finnish
        dual-degree program at <strong>Nanjing University</strong> and the{' '}
        <strong>University of Helsinki</strong> (Nanjing–Helsinki Institute in
        Atmospheric and Earth System Sciences). I am currently an undergraduate
        visiting researcher at <strong>Duke University</strong> with Prof. <PersonLink name="Liyin He" />{' '}
        and at <strong>Stanford University</strong> with Prof. <PersonLink name="Yuan Wang" />, working
        on observation-constrained,
        physics-informed machine learning for urban isoprene emissions.
      </p>
      <p>
        My research focuses on atmospheric chemistry, urban air quality, biogenic
        volatile organic compounds (BVOCs), and observation-driven machine learning.
        Recent work includes regime-aware organic-aerosol analysis in Hong Kong and Shanghai,
        boreal-forest new particle formation from multi-site particle number size
        distributions, and hydrological controls on tree-mortality risk in
        southeastern U.S. forests.
      </p>
      <p>
        I plan to pursue graduate study at the intersection of atmospheric science
        and computational methods, with the goal of developing approaches that are
        both physically grounded and practically useful for air quality and climate
        problems.
      </p>

      <h2>Research interests</h2>
      <ul>
        <li>
          <strong>Atmospheric chemistry</strong> — urban air quality, BVOCs, new
          particle formation, particle number size distributions, organic aerosol
          dynamics
        </li>
        <li>
          <strong>Climate extremes</strong> — hourly extreme precipitation,
          anthropogenic attribution, and regional climate over the Yangtze River
          Basin
        </li>
        <li>
          <strong>Environmental data science</strong> — observation-driven machine
          learning, clustering and regime detection, generalized additive models,
          satellite and in situ data analysis
        </li>
      </ul>

      <h2>Education</h2>
      <ul className="cv__list">
        {education.map((item) => (
          <li className="cv__row" key={item.title}>
            <div className="cv__period">{item.period}</div>
            <div className="cv__body">
              <p className="cv__title">{item.title}</p>
              <p className="cv__subtitle">{item.subtitle}</p>
              <p>{item.note}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2>Elsewhere on this site</h2>
      <p>
        <Link href="/research">Research projects</Link> ·{' '}
        <Link href="/publications">Publications &amp; presentations</Link> ·{' '}
        <Link href="/cv">Curriculum vitae</Link> ·{' '}
        <Link href="/activities">Activities &amp; service</Link> ·{' '}
        <Link href="/contact">Contact</Link>
      </p>
    </>
  )
}
