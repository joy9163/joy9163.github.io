import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import { Download } from 'lucide-react'

export const metadata: Metadata = { title: 'CV' }

type Row = {
  period: string
  title: string
  subtitle?: string
  description?: string
  items?: string[]
}

const education: Row[] = [
  {
    period: '09/2023 – Present',
    title: 'B.S. in Atmospheric Science',
    subtitle: 'Nanjing University and University of Helsinki',
    description:
      'Sino-Finnish dual-degree program, Nanjing–Helsinki Institute in Atmospheric and Earth System Sciences. Overall GPA: 4.58/5.00 (91.6/100) | Rank: 3/78',
  },
  {
    period: '09/2025 – 12/2025',
    title: 'Undergraduate Exchange Program',
    subtitle: 'The Hong Kong University of Science and Technology',
    description: 'Atmospheric Science / Environmental Science',
  },
]

const research: Row[] = [
  {
    period: '07/2026 – Present',
    title: 'Observation-constrained reconstruction of high-resolution urban isoprene emissions',
    subtitle: 'Advisor: Prof. Yuan Wang, Stanford University',
    items: [
      'Built a unified high-resolution spatiotemporal framework for New York City by integrating TEMPO HCHO/NO2, meteorology, vegetation, land cover, anthropogenic emissions, and urban BVOC emission estimates',
      'Developed a hybrid machine-learning model to reconstruct hourly isoprene emissions using observation-constrained information and high-resolution emission priors',
      'Designed temporal and spatial block validation, residual-learning diagnostics, and uncertainty analyses to evaluate reconstruction skill and generalizability',
    ],
  },
  {
    period: '12/2025 – Present',
    title: 'Regime transitions and POC/SOC partitioning of urban organic aerosols in Shanghai',
    subtitle: 'Advisors: Prof. Jianzhen Yu and Prof. Lixue Cheng, HKUST',
    items: [
      'Characterized regime-dependent temporal dynamics and carbon partitioning of Shanghai urban organic aerosols from long-term observations',
      'Implemented PCA–GMM clustering and transition-matrix diagnostics to quantify regime residence times, stationary distributions, and switching across pollution episodes',
      'Evaluated inferred POC/SOC fractions against literature constraints and examined data-driven prediction of regime evolution',
    ],
  },
  {
    period: '08/2025 – Present',
    title: 'Boreal-forest new particle formation and multi-site particle number size distributions',
    subtitle:
      'Advisors: Prof. Chao Yan and Prof. Lian Xue, Nanjing University and University of Helsinki',
    items: [
      'Analyzed particle number size distributions from 16 long-term ARM and EBAS stations during the Sino-Finnish Helsinki Atmospheric and Earth System Scientific Expedition, using nano-ranking with preliminary growth-rate (GR), formation-rate (J), and GDE analyses',
      'Combined SMEAR II N50 observations with ENSO, NAO, and AO indices to quantify teleconnections to boreal-forest new particle formation (College Student Innovation Training Program)',
      'Characterized seasonal and interannual N50 controls with lagged cross-correlation, spectral analysis, joint NAO–AO composites, and radiation-stratified wavelet coherence',
    ],
  },
  {
    period: '11/2024 – 07/2025',
    title:
      'Characterization of summer hourly extreme precipitation and attribution of anthropogenic emissions in the middle and lower Yangtze River Basin',
    subtitle:
      'Advisor: Prof. Anning Huang, School of Atmospheric Sciences, Nanjing University',
    items: [
      'Investigated the spatial and temporal characteristics of summer hourly extreme precipitation across the middle and lower Yangtze River Basin using long-term station observations',
      'Conducted attribution analyses using CMIP6 model experiments to evaluate the influence of anthropogenic emissions and natural forcing',
    ],
  },
  {
    period: '01/2025 – 12/2025',
    title: 'Hydrological stress, carbon fluxes, and tree-mortality risk in coastal and bottomland forests',
    subtitle:
      'Advisor: Prof. Maricar Aguilos, North Carolina State University',
    items: [
      'Quantified hydrological and carbon-flux drivers of tree mortality using generalized additive models, Mann–Kendall tests, and regression analyses in R',
      'Established ROC-based early-warning thresholds and evaluated classification performance for tree-mortality risk prediction',
    ],
  },
]

const awards: Row[] = [
  {
    period: '2025–2026',
    title: 'Zheng-Gang Scholarship for Overseas Study',
    subtitle: 'Nanjing University (Top 2%)',
  },
  {
    period: '2025–2026',
    title: 'Renmin Scholarship',
    subtitle: 'Nanjing University',
  },
  {
    period: '2024–2025',
    title: 'Yan Baoling Scholarship for Overseas Exchange (Excellence Award)',
    subtitle: 'Nanjing University',
  },
  {
    period: '2023–2025',
    title: 'Outstanding Student',
    subtitle: 'Nanjing University (2023–2024 and 2024–2025)',
  },
  {
    period: '2023–2024',
    title: 'National Scholarship',
    subtitle: 'Ministry of Education of China (Top 1%)',
  },
  {
    period: '2024',
    title: 'Outstanding Research Report',
    subtitle: 'Nanjing University Summer Social Practice Program',
  },
  {
    period: '2023–2024',
    title: 'Freshman College Outstanding Student',
    subtitle: 'Nanjing University',
  },
]

const service: Row[] = [
  {
    period: '02/2025 – Present',
    title: 'Student Ambassador',
    subtitle: 'Global Training Initiative, North Carolina State University',
  },
  {
    period: '2024 – 2026',
    title: 'Standing Representative',
    subtitle: 'Nanjing University Student Representative Congress',
  },
  {
    period: '09/2024 – 09/2025',
    title: 'Class Monitor',
    subtitle: 'Nanjing–Helsinki Institute in Atmospheric and Earth System Sciences',
  },
]

function RowList({ rows }: { rows: Row[] }) {
  return (
    <ul className="cv__list">
      {rows.map((row) => (
        <li className="cv__row" key={row.title + row.period}>
          <div className="cv__period">{row.period}</div>
          <div className="cv__body">
            <p className="cv__title">{row.title}</p>
            {row.subtitle && <p className="cv__subtitle">{row.subtitle}</p>}
            {row.description && <p>{row.description}</p>}
            {row.items && (
              <ul>
                {row.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function CV() {
  return (
    <SiteLayout
      title="Curriculum vitae"
      lead="A condensed version is below; the PDF download matches the latest CV."
    >
      <p>
        <a className="btn" href="/CV.pdf" download="Jiayin_Zhang_CV.pdf">
          <Download size={16} />
          Download full CV (PDF)
        </a>
      </p>

      <h2>Education</h2>
      <RowList rows={education} />

      <h2>Research experience</h2>
      <RowList rows={research} />

      <h2>Publications &amp; presentations</h2>
      <ul className="archive__list">
        <li className="archive__item">
          <h3 className="archive__item-title">
            <a
              href="https://doi.org/10.3390/f16081255"
              target="_blank"
              rel="noreferrer noopener"
            >
              Determining early warning thresholds to detect tree mortality risk in a
              southeastern U.S. bottomland hardwood wetland
            </a>
          </h3>
          <p className="archive__item-meta">
            Aguilos, M., Zhang, J., Belgado, M. L., Sun, G., McNulty, S., &amp; King, J.
            (2025). <em>Forests</em>, 16(8), 1255.
          </p>
        </li>
        <li className="archive__item">
          <h3 className="archive__item-title">
            Characterization of summer hourly extreme precipitation and attribution of
            anthropogenic discharge in the middle and lower Yangtze River Basin
          </h3>
          <p className="archive__item-meta">
            Oral presentation · First Nanjing University Atmospheric Sciences Top Forum,
            Nanjing, China · May 2025
          </p>
        </li>
        <li className="archive__item">
          <h3 className="archive__item-title">
            Characterization of summer hourly extreme precipitation and attribution of
            anthropogenic discharge in the middle and lower Yangtze River Basin
          </h3>
          <p className="archive__item-meta">
            Oral presentation · Second AtmosFuture Forum, Suzhou, China · April 2026
          </p>
        </li>
        <li className="archive__item">
          <h3 className="archive__item-title">
            Linking hydrological stress to ghost forest formation: thresholds for tree
            mortality in coastal ecosystems
          </h3>
          <p className="archive__item-meta">
            Aguilos, M., Zhang, J., Belgado, M. L., Sun, G., &amp; King, J. · AmeriFlux
            Annual Meeting, Tucson, USA · October 2025
          </p>
        </li>
        <li className="archive__item">
          <h3 className="archive__item-title">
            Modeling evapotranspiration dynamics across southeastern U.S. ecosystems
            using flux data and machine learning
          </h3>
          <p className="archive__item-meta">
            Aguilos, M., Sun, G., Liu, N., Zhang, J., Belgado, M., McNulty, S., &amp;
            King, J. · AGU Annual Meeting, New Orleans, USA · December 2025
          </p>
        </li>
      </ul>

      <h2>Selected competitions</h2>
      <RowList
        rows={[
          {
            period: 'Aug 2026',
            title:
              'First Prize, China International College Students’ Innovation Competition (CICSIC), Finland Regional',
            subtitle: 'Project Sentinella (US$3,000 award)',
            items: [
              'Developed Sentinella, an integrated digital-twin system for hyperlocal-scale climate and public-health risk',
            ],
          },
          {
            period: 'Nov 2025',
            title: 'Invited Presenter, United Nations Climate Change Conference (COP30)',
            subtitle: 'Belém, Brazil; Asian Climate–SDG Technology Innovation Hackathon Finalist',
            items: [
              'Invited to present Sentinella on the UNFCCC COP30 stage after selection as a hackathon finalist',
            ],
          },
        ]}
      />

      <h2>Awards &amp; honours</h2>
      <RowList rows={awards} />

      <h2>International engagement &amp; leadership</h2>
      <RowList
        rows={[
          {
            period: 'Jul 2026',
            title: 'Selected Delegate, UNITAR & Nanjing University UN Immersion Programme',
            subtitle: 'Palais des Nations, Geneva',
            items: [
              'Completed a multilateral diplomacy and global governance immersion, including UN system briefings and engagement with Geneva-based international organizations',
            ],
          },
          ...service,
        ]}
      />

      <h2>Skills</h2>
      <ul className="cv__list">
        <li className="cv__row">
          <div className="cv__period">Programming</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>Python · R · MATLAB · LaTeX</p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">Methods</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>
              Statistical modeling · machine learning · satellite and in situ data
              analysis · scientific visualization
            </p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">Languages</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>Mandarin Chinese (native) · English (IELTS 7.5)</p>
          </div>
        </li>
      </ul>
    </SiteLayout>
  )
}
