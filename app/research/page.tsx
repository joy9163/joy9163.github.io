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
    title: 'Dynamic regime transitions and POC/SOC partitioning of urban organic aerosols in Shanghai',
    period: '12/2025 – Present',
    role: 'Research Assistant',
    advisor: 'Prof. Jianzhen Yu and Prof. Lixue Cheng',
    affiliation: 'The Hong Kong University of Science and Technology',
    description:
      'Analysing long-term observations of urban organic aerosol to characterise regime-dependent temporal dynamics and carbon partitioning. Applied PCA-GMM clustering and transition-matrix diagnostics to identify aerosol dynamic regimes, and quantified residence time, stationary distribution, and switching behaviour across pollution episodes. Inferred POC/SOC fractions are evaluated through literature-based plausibility checks, with planned LSTM/PINN modelling of regime evolution.',
    keywords: ['Organic aerosol', 'PCA-GMM', 'POC/SOC partitioning', 'Markov transition matrix', 'Shanghai'],
  },
  {
    title: 'Investigation of global multi-site particle number size distribution',
    period: '08/2025',
    role: 'Research Assistant',
    advisor: 'Prof. Chao Yan',
    affiliation:
      'Sino-Finnish Helsinki Atmospheric and Earth System Scientific Expedition, Nanjing–Helsinki Institute',
    description:
      'Analysed particle size distribution data from 16 long-term global stations (ARM and EBAS databases) using a nano-ranking approach to identify environmental variations. Conducted preliminary growth rate (GR), formation rate (J), and general dynamic equation (GDE) analyses.',
    keywords: ['Particle number size distribution', 'New particle formation', 'ARM', 'EBAS', 'Growth rate'],
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
      'Investigated the spatiotemporal characteristics of extreme hourly precipitation events in the Yangtze River Basin, and conducted attribution analysis with CMIP6 model output to quantify the contribution of anthropogenic emissions.',
    keywords: ['Extreme precipitation', 'CMIP6', 'Detection & attribution', 'Yangtze River Basin'],
  },
  {
    title:
      'Irreversible impacts of sea level rise and prolonged inundation on carbon fluxes and tree mortality: drivers of ghost forest formation',
    period: '01/2025 – 02/2025',
    role: 'Research Assistant',
    advisor: 'Prof. Maricar Aguilos',
    affiliation:
      'GEARS Program, Department of Forestry and Environmental Resources, North Carolina State University',
    description:
      'Applied generalized additive models (GAMs), Mann–Kendall trend tests, and regression analyses in R to identify hydrological and carbon-flux drivers of tree mortality. Used ROC analysis to establish early-warning thresholds and evaluate classification performance (AUC) for mortality risk prediction.',
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
      'Chemical processes in the atmosphere, particle number size distributions, aerosol dynamics, and their consequences for climate and air quality.',
  },
  {
    name: 'Climate extremes',
    description:
      'Extreme weather and climate events — their spatiotemporal characteristics, anthropogenic attribution, and future projection with CMIP6 models.',
  },
  {
    name: 'Environmental data science',
    description:
      'Computational and statistical frameworks for environmental data in R, Python, and MATLAB, with an emphasis on reproducibility and physical interpretability.',
  },
]

export default function Research() {
  return (
    <SiteLayout
      title="Research"
      lead="Interdisciplinary work at the intersection of atmospheric science, climate dynamics, and computational methods."
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
