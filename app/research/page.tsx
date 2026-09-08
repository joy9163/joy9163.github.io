import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import { FileText, Image as ImageIcon } from 'lucide-react'

export const metadata: Metadata = { title: 'Research' }

type Project = {
  title: string
  period: string
  role: string
  advisor?: string
  affiliation?: string
  description: string
  keywords: string[]
  links?: { label: string; href: string; kind: 'paper' | 'poster' }[]
}

const projects: Project[] = [
  {
    title: 'Observation-constrained reconstruction of high-resolution urban isoprene emissions',
    period: '07/2026 – Present',
    role: 'Undergraduate Visiting Research Intern',
    advisor: 'Prof. Yuan Wang',
    affiliation: 'Stanford University',
    description:
      'Built a unified high-resolution spatiotemporal framework for New York City by integrating TEMPO HCHO/NO2, meteorology, vegetation, land cover, anthropogenic emissions, and urban BVOC emission estimates. Developing a hybrid machine-learning model to reconstruct hourly isoprene emissions using observation-constrained information and high-resolution emission priors, with temporal and spatial block validation, residual-learning diagnostics, and uncertainty analyses.',
    keywords: ['Urban isoprene', 'BVOCs', 'TEMPO', 'Machine learning', 'New York City'],
  },
  {
    title: 'Regime transitions and POC/SOC partitioning of urban organic aerosols in Shanghai',
    period: '12/2025 – Present',
    role: 'Research Assistant',
    advisor: 'Prof. Jianzhen Yu and Prof. Lixue Cheng',
    affiliation: 'The Hong Kong University of Science and Technology',
    description:
      'Characterized regime-dependent temporal dynamics and carbon partitioning of Shanghai urban organic aerosols from long-term observations. Implemented PCA–GMM clustering and transition-matrix diagnostics to quantify regime residence times, stationary distributions, and switching across pollution episodes. Evaluated inferred POC/SOC fractions against literature constraints and examined data-driven prediction of regime evolution.',
    keywords: ['Organic aerosol', 'PCA-GMM', 'POC/SOC partitioning', 'Markov transition matrix', 'Shanghai'],
  },
  {
    title: 'Boreal-forest new particle formation and multi-site particle number size distributions',
    period: '08/2025 – Present',
    role: 'Undergraduate Researcher',
    advisor: 'Prof. Chao Yan and Prof. Lian Xue',
    affiliation: 'Nanjing University and University of Helsinki',
    description:
      'Analyzed particle number size distributions from 16 long-term ARM and EBAS stations during the Sino-Finnish Helsinki Atmospheric and Earth System Scientific Expedition, using nano-ranking with preliminary growth-rate (GR), formation-rate (J), and GDE analyses. Combined SMEAR II N50 observations with ENSO, NAO, and AO indices to quantify teleconnections to boreal-forest new particle formation, with lagged cross-correlation, spectral analysis, joint NAO–AO composites, and radiation-stratified wavelet coherence.',
    keywords: ['New particle formation', 'Particle number size distribution', 'N50', 'ENSO', 'SMEAR II'],
  },
  {
    title: 'Sentinella',
    period: '07/2025 – 08/2026',
    role: 'Project member',
    affiliation: 'Asian Climate–SDG Technology Innovation Hackathon / CICSIC Finland Regional',
    description:
      'An integrated digital-twin system for hyperlocal-scale climate and public-health risk. Developed an urban digital-twin platform that integrates hydrodynamic, epidemiological, and community-intelligence data to support flooding and epidemic prevention. Selected as a finalist of the 2025 Asian Climate–SDG Technology Innovation Hackathon (ACTION) and invited to present at COP30 in Belém. Received First Prize at the Finland regional of the 2026 China International College Students’ Innovation Competition (US$3,000 award).',
    keywords: ['Digital twin', 'Climate risk', 'Public health', 'COP30', 'CICSIC'],
  },
  {
    title:
      'Characterization of summer hourly extreme precipitation and attribution of anthropogenic discharge in the middle and lower Yangtze River Basin',
    period: '11/2024 – 07/2025',
    role: 'Lead Researcher',
    advisor: 'Prof. Anning Huang',
    affiliation:
      'College Student Innovation and Entrepreneurship Program (provincial level), Nanjing University',
    description:
      'Investigated the spatial and temporal characteristics of summer hourly extreme precipitation across the middle and lower Yangtze River Basin using long-term station observations, and conducted attribution analyses with CMIP6 model experiments to evaluate the influence of anthropogenic emissions and natural forcing. Presented at the First Nanjing University Atmospheric Sciences Top Forum (Nanjing, May 2025) and the Second AtmosFuture Forum (Suzhou, April 2026).',
    keywords: ['Extreme precipitation', 'CMIP6', 'Detection & attribution', 'Yangtze River Basin'],
  },
  {
    title: 'Hydrological stress, carbon fluxes, and tree-mortality risk in coastal and bottomland forests',
    period: '01/2025 – 12/2025',
    role: 'Research Collaborator',
    advisor: 'Prof. Maricar Aguilos',
    affiliation:
      'Department of Forestry and Environmental Resources, North Carolina State University',
    description:
      'Quantified hydrological and carbon-flux drivers of tree mortality using generalized additive models, Mann–Kendall tests, and regression analyses in R. Established ROC-based early-warning thresholds and evaluated classification performance for tree-mortality risk prediction.',
    keywords: ['Ghost forest', 'GAMs', 'ROC analysis', 'Carbon flux', 'Tree mortality'],
    links: [
      { label: 'Paper (Forests, 2025)', href: 'https://doi.org/10.3390/f16081255', kind: 'paper' },
      { label: 'Poster', href: '/posters/ncsu.PNG', kind: 'poster' },
    ],
  },
  {
    title: 'Effects of thermal anomalies over the Tibetan Plateau on the Southern Hemisphere',
    period: '04/2024 – 10/2024',
    role: 'Lead Researcher',
    advisor: 'Prof. Yang Zhang',
    affiliation:
      'Early Research Training Program "Golden Seed", School of Atmospheric Sciences, Nanjing University',
    description:
      'Visualised 2-metre temperature, geopotential height, and wind fields in MATLAB, then applied linear regression and random forest models to analyse relationships among key climate variables. Awarded first place with an "Excellent" rating in the final evaluation.',
    keywords: ['Tibetan Plateau', 'Teleconnections', 'Random forest', 'MATLAB'],
    links: [
      {
        label: 'Poster (PDF)',
        href: '/posters/金种子项目_海报（终稿）.pptx.pdf',
        kind: 'poster',
      },
    ],
  },
]

const themes = [
  {
    name: 'Atmospheric chemistry',
    description:
      'Urban air quality, BVOCs, particle number size distributions, aerosol dynamics, and their consequences for climate and air quality.',
  },
  {
    name: 'Climate extremes',
    description:
      'Extreme weather and climate events — their spatiotemporal characteristics, anthropogenic attribution, and analysis with CMIP6 models.',
  },
  {
    name: 'Environmental data science',
    description:
      'Observation-driven machine learning and statistical frameworks for environmental data in Python, R, and MATLAB, with an emphasis on reproducibility and physical interpretability.',
  },
]

export default function Research() {
  return (
    <SiteLayout
      title="Research"
      lead="Atmospheric chemistry, urban air quality, BVOCs, and observation-driven machine learning."
    >
      <h2>Themes</h2>
      <ul className="cv__list">
        {themes.map((theme) => (
          <li className="cv__row" key={theme.name}>
            <div className="cv__period">{theme.name}</div>
            <div className="cv__body">
              <p style={{ margin: 0 }}>{theme.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2>Projects</h2>
      <ul className="archive__list">
        {projects.map((project) => (
          <li className="archive__item" key={project.title}>
            <h3 className="archive__item-title">{project.title}</h3>
            <p className="archive__item-meta">
              {project.period} · {project.role}
              {project.advisor ? ` · ${project.advisor}` : ''}
              {project.affiliation ? ` · ${project.affiliation}` : ''}
            </p>
            <p className="archive__item-excerpt">{project.description}</p>
            <ul className="tag-list">
              {project.keywords.map((keyword) => (
                <li className="tag" key={keyword}>
                  {keyword}
                </li>
              ))}
            </ul>
            {project.links && (
              <div className="archive__item-links" style={{ marginTop: '0.7em' }}>
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                    {link.kind === 'paper' ? <FileText size={14} /> : <ImageIcon size={14} />}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <h2>Approach</h2>
      <p>
        I combine established atmospheric science methods with modern computational
        approaches, and try to keep every analysis reproducible, transparent, and
        physically interpretable. I actively look for interdisciplinary collaborations
        that bring different kinds of expertise to bear on the same environmental
        problem.
      </p>
    </SiteLayout>
  )
}
