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
    subtitle: 'Nanjing University, Nanjing, China',
    description: 'CGPA 4.58 / 5.0 · Rank 3 / 78',
    items: [
      'Core modules: Introduction to Atmospheric Science, Fluid Dynamics, Introduction to Environmental Science, Calculus I & II, Probability Theory and Mathematical Statistics, Ordinary Differential Equations, College Physics I & II, General Chemistry, Linear Algebra, Scientific Computing I',
      'Research assistant, Nanjing University Climate Lab',
    ],
  },
  {
    period: '09/2025 – Present',
    title: 'Exchange Programme',
    subtitle: 'The Hong Kong University of Science and Technology',
    description: 'CGPA 3.925 / 4.3',
    items: [
      'Core modules: Atmospheric Chemistry, Practical Artificial Intelligence in Science, Air Quality Control and Management, Urban Air Pollution',
    ],
  },
]

const research: Row[] = [
  {
    period: '12/2025 – Present',
    title: 'Shanghai urban organic aerosol dynamics and carbon partitioning',
    subtitle:
      'Advisors: Prof. Jianzhen Yu and Prof. Lixue Cheng, HKUST',
    items: [
      'Analysed long-term observational datasets of urban organic aerosols in Shanghai to characterise regime-dependent temporal dynamics and carbon partitioning behaviour',
      'Applied PCA-GMM clustering and transition-matrix diagnostics to identify aerosol dynamic regimes, quantify residence time, stationary distribution, and switching behaviour across episodes',
      'Evaluated inferred POC/SOC fractions through literature-based plausibility checks, with further plans for LSTM/PINN-based predictive modelling of regime evolution',
    ],
  },
  {
    period: '08/2025',
    title: 'Sino-Finnish Helsinki Atmospheric and Earth System Scientific Expedition',
    subtitle:
      'Advisor: Prof. Chao Yan, Nanjing–Helsinki Institute in Atmospheric and Earth System Science',
    items: [
      'Analysed particle size distribution data from 16 long-term global stations (ARM & EBAS databases) using a nano-ranking approach to identify environmental variations',
      'Conducted preliminary growth rate (GR), formation rate (J), and GDE analyses',
    ],
  },
  {
    period: '11/2024 – 07/2025',
    title:
      'College Student Innovation and Entrepreneurship Program (provincial level)',
    subtitle:
      'Advisor: Prof. Anning Huang, School of Atmospheric Sciences, Nanjing University',
    items: [
      'Investigated spatiotemporal characteristics of extreme hourly precipitation events in the Yangtze River Basin',
      'Conducted attribution analysis using CMIP6 model data to quantify the impact of anthropogenic emissions',
    ],
  },
  {
    period: '01/2025 – 02/2025',
    title: 'GEARS Program',
    subtitle:
      'Advisor: Prof. Maricar Aguilos, Department of Forestry and Environmental Resources, North Carolina State University',
    items: [
      'Applied generalized additive models (GAMs), Mann–Kendall trend tests, and regression analyses in R to identify hydrological and carbon-flux drivers of tree mortality',
      'Used ROC analysis to establish early-warning thresholds and evaluate classification performance (AUC) for mortality risk prediction',
    ],
  },
  {
    period: '04/2024 – 10/2024',
    title: 'Early Research Training Program "Golden Seed"',
    subtitle:
      'Advisor: Prof. Yang Zhang, School of Atmospheric Sciences, Nanjing University',
    items: [
      'Visualised 2-metre temperature, geopotential height, and wind fields using MATLAB',
      'Applied linear regression and random forest models to analyse relationships among key climate variables',
      'Achieved first place and an "Excellent" rating in the final evaluation',
    ],
  },
]

const awards = [
  { period: 'Nov 2025', title: 'Renmin Scholarship', subtitle: 'Nanjing University' },
  {
    period: 'Jun 2025',
    title: 'Yan Baoling Overseas Exchange Scholarship, Excellence Award',
    subtitle: 'Nanjing University',
  },
  {
    period: 'Nov 2024, Oct 2025',
    title: 'Nanjing University Outstanding Student',
    subtitle: 'Nanjing University',
  },
  {
    period: 'Oct 2024',
    title: 'National Scholarship',
    subtitle: 'Ministry of Education, China',
  },
  {
    period: 'Sep 2024',
    title: 'Outstanding Research Report',
    subtitle: 'Nanjing University Summer Social Practice Program',
  },
  {
    period: 'May 2024',
    title: 'Freshman College Outstanding Student',
    subtitle: 'Nanjing University',
  },
]

const service = [
  {
    period: '02/2025 – Present',
    title: 'Student Ambassador',
    subtitle: 'Global Training Initiative, North Carolina State University',
  },
  {
    period: '10/2024 – Present',
    title: 'Standing Representative',
    subtitle: 'Nanjing University Student Representative Congress',
  },
  {
    period: '10/2024 – Present',
    title: 'Guzheng Performer',
    subtitle: 'Nanjing University Traditional Chinese Music Ensemble',
  },
  {
    period: '09/2024 – Present',
    title: 'Class Monitor',
    subtitle: 'Nanjing–Helsinki Institute in Atmospheric and Earth System Science',
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
      lead="A condensed version is below; the full PDF includes complete publication and presentation lists."
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

      <h2>Competitions</h2>
      <RowList
        rows={[
          {
            period: '2025',
            title: '2025 Asian Climate-SDG Technology Innovation Hackathon',
            subtitle: 'Finalist',
            items: [
              'Invited to a roadshow in Hong Kong and to the UN Climate Change Conference (COP30) in Brazil',
              'Developed an urban digital twin platform to safeguard public health against climate-related risks such as flooding and epidemics, integrating hydrodynamic, epidemiological, and community intelligence data',
            ],
          },
        ]}
      />

      <h2>Awards &amp; honours</h2>
      <RowList rows={awards} />

      <h2>Service &amp; leadership</h2>
      <RowList rows={service} />

      <h2>Skills</h2>
      <ul className="cv__list">
        <li className="cv__row">
          <div className="cv__period">Programming</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>Python · R · MATLAB · LaTeX · Microsoft Office</p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">Methods</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>
              Climate data analysis · statistical modelling · machine learning ·
              atmospheric modelling · data visualisation · scientific writing
            </p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">Languages</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>Mandarin (native) · English (IELTS 7.5)</p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">Interests</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>Volunteering (200+ hours) · guzheng · badminton · gym</p>
          </div>
        </li>
      </ul>
    </SiteLayout>
  )
}
