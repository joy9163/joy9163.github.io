'use client'

import Link from 'next/link'

const news = [
  {
    date: 'Aug 2026',
    text: 'First Prize at the Finland regional of the China International College Students’ Innovation Competition (CICSIC) for project Sentinella (US$3,000 award).',
  },
  {
    date: 'Jul 2026',
    text: 'Started a visiting research internship at Stanford University with Prof. Yuan Wang on observation-constrained reconstruction of urban isoprene emissions.',
  },
  {
    date: 'Jul 2026',
    text: 'Selected delegate, UNITAR & Nanjing University UN Immersion Programme, Palais des Nations, Geneva.',
  },
  {
    date: 'Nov 2025',
    text: 'Invited to present Sentinella at COP30 in Belém after selection as a finalist of the 2025 Asian Climate–SDG Technology Innovation Hackathon.',
  },
  {
    date: 'Dec 2025',
    text: 'Began research on urban organic-aerosol regime transitions and POC/SOC partitioning in Shanghai at HKUST.',
  },
  {
    date: 'Aug 2025',
    text: 'Co-authored a paper in Forests on early-warning thresholds for tree-mortality risk in southeastern U.S. bottomland hardwood wetlands.',
  },
]

const education = [
  {
    period: '09/2023 – Present',
    title: 'B.S. in Atmospheric Science',
    subtitle: 'Nanjing University and University of Helsinki',
    note: 'Sino-Finnish dual-degree program, Nanjing–Helsinki Institute in Atmospheric and Earth System Sciences',
  },
  {
    period: '09/2025 – 12/2025',
    title: 'Undergraduate Exchange Program',
    subtitle: 'The Hong Kong University of Science and Technology',
    note: 'Atmospheric Science / Environmental Science',
  },
]

export default function AboutContent() {
  return (
    <>
      <p>
        I am an undergraduate researcher in atmospheric science in the Sino-Finnish
        dual-degree program at <strong>Nanjing University</strong> and the{' '}
        <strong>University of Helsinki</strong> (Nanjing–Helsinki Institute in
        Atmospheric and Earth System Sciences). I am currently a visiting research
        intern at <strong>Stanford University</strong>, working with Prof. Yuan Wang
        on observation-constrained reconstruction of high-resolution urban isoprene
        emissions.
      </p>
      <p>
        My research focuses on atmospheric chemistry, urban air quality, biogenic
        volatile organic compounds (BVOCs), and observation-driven machine learning.
        Recent work includes urban organic-aerosol regime analysis in Shanghai,
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

      <h2>News</h2>
      <ul className="cv__list">
        {news.map((item) => (
          <li className="cv__row" key={item.date + item.text.slice(0, 12)}>
            <div className="cv__period">{item.date}</div>
            <div className="cv__body">
              <p style={{ margin: 0 }}>{item.text}</p>
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
