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
      'Sino-Finnish dual-degree program, Nanjing–Helsinki Institute in Atmospheric and Earth System Sciences. Overall GPA: 4.58/5.00 (91.6/100) | Rank: 2/78',
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
    title: 'Observation-constrained, physics-informed machine learning for urban isoprene emissions in New York City',
    subtitle:
      'Undergraduate Visiting Researcher, Stanford University and Duke University. Advisors: Prof. Yuan Wang (Stanford, since July 2026) and Prof. Liyin He (Duke, since October 2026)',
    items: [
      'Using a 30-m NYC inventory (Wei et al., 2024) as reference, built a LightGBM emulator (city-day R² = 0.878 on unseen dates) that tracked daily variability better than EPA BEIS; TROPOMI HCHO cut city MAE by 8.4%',
      'Designed blocked and rolling validation that exposed hot-day extrapolation failure; blending in the analytic MEGAN temperature response raised hot-day peak recovery from 75% to 85%',
      'With Prof. He, extended this to six summers (2019–2024) of hourly Bronx isoprene: pure ML explained ~67% of held-out variance, 10 points above MEGAN3.1, but under unseen heat hybrids kept R² = 0.62 vs. 0.32',
      'Re-implemented the MEGAN3.1 isoprene activity in PyTorch, reproducing the original fluxes to machine precision, to learn its response parameters from concentration data',
    ],
  },
  {
    period: '09/2025 – Present',
    title: 'Regime-aware POC/SOC partitioning of urban organic aerosols in Hong Kong and Shanghai',
    subtitle: 'Research Assistant. Advisors: Prof. Jianzhen Yu and Prof. Lixue Cheng, HKUST',
    items: [
      'Built RAMCARB (regime-aware OC/EC baselines) on hourly Hong Kong data and applied it to Shanghai, 2013–2024',
      'Used PCA–GMM clustering and transition matrices to quantify regime residence, stationarity and switching',
      'Evaluated POC/SOC fractions against literature constraints and tested data-driven prediction of regime evolution',
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
  { period: '2026–2027', title: 'Zheng-Gang Elite Scholarship', subtitle: 'Nanjing University' },
  { period: '2026', title: 'Excellent Presentation Award', subtitle: '2nd Future Atmospheric Science Forum' },
  {
    period: '2025–2026',
    title: 'Zheng-Gang Scholarship for Overseas Study',
    subtitle: 'Nanjing University (Top 2%)',
  },
  {
    period: '2025–2027',
    title: 'Renmin Scholarship',
    subtitle: 'Nanjing University, 2026–2027 and 2025–2026 (Top 5%)',
  },
  {
    period: '2025',
    title: 'Best Oral Presentation',
    subtitle: '1st Nanjing University Forum for Top-Notch Students in Atmospheric Sciences',
  },
  {
    period: '2024–2025',
    title: 'Yan Baoling Scholarship for Overseas Exchange (Excellence Award, 10/4,000)',
    subtitle: 'Nanjing University',
  },
  {
    period: '2023–2025',
    title: 'Outstanding Student',
    subtitle: 'Nanjing University (Top 5%), 2023–2024 and 2024–2025',
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
    subtitle: 'Nanjing University Student Representative Congress (three terms)',
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
