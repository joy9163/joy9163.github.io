'use client'

import Link from 'next/link'

const news = [
  {
    date: 'Dec 2025',
    text: 'Started work on urban organic aerosol regime transitions and POC/SOC partitioning in Shanghai at HKUST.',
  },
  {
    date: 'Nov 2025',
    text: 'Selected as a finalist in the 2025 Asian Climate-SDG Technology Innovation Hackathon; presented at COP30 in Brazil.',
  },
  {
    date: 'Oct 2025',
    text: 'Co-authored poster at the AmeriFlux Annual Meeting, Tucson, USA.',
  },
  {
    date: 'Sep 2025',
    text: 'Began an exchange year at the Hong Kong University of Science and Technology.',
  },
  {
    date: 'Aug 2025',
    text: 'Published in Forests on early-warning thresholds for tree mortality in bottomland hardwood wetlands.',
  },
]

const education = [
  {
    period: '09/2023 – Present',
    title: 'B.S. in Atmospheric Science',
    subtitle: 'Nanjing University, Nanjing, China',
    note: 'CGPA 4.58 / 5.0 · Rank 3 / 78',
  },
  {
    period: '09/2025 – Present',
    title: 'Exchange Programme',
    subtitle: 'The Hong Kong University of Science and Technology',
    note: 'CGPA 3.925 / 4.3 · Atmospheric Chemistry, Practical AI in Science, Air Quality Control, Urban Air Pollution',
  },
]

export default function AboutContent() {
  return (
    <>
      <p>
        I am an undergraduate student in Atmospheric Science at{' '}
        <strong>Nanjing University</strong>, currently on exchange at the{' '}
        <strong>Hong Kong University of Science and Technology</strong>. My work sits
        at the intersection of atmospheric chemistry, climate extremes, and
        data-driven environmental research.
      </p>
      <p>
        I am particularly interested in combining physical understanding with
        interpretable machine learning to study complex Earth system problems — from
        extreme precipitation attribution with CMIP6 models, to global particle number
        size distributions across 16 long-term stations, to organic aerosol regime
        transitions in urban Shanghai. Research experience across China, Finland, Hong
        Kong, and the United States has shaped how I approach these questions.
      </p>
      <p>
        I plan to pursue graduate study at the intersection of atmospheric science and
        computational methods, with the goal of developing approaches that are both
        physically grounded and practically useful for understanding climate change
        impacts.
      </p>

      <h2>Research interests</h2>
      <ul>
        <li>
          <strong>Atmospheric chemistry</strong> — new particle formation, particle
          number size distributions, organic aerosol dynamics, urban air quality
        </li>
        <li>
          <strong>Climate extremes</strong> — hourly extreme precipitation,
          anthropogenic attribution, regional climate over the Yangtze River Basin and
          the Tibetan Plateau
        </li>
        <li>
          <strong>Environmental data science</strong> — interpretable machine
          learning, clustering and regime detection, generalized additive models,
          threshold and early-warning analysis
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
