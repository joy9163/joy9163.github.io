import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import { SITE } from '@/lib/site'

export const metadata: Metadata = { title: 'Contact' }

export default function Contact() {
  return (
    <SiteLayout
      title="Contact"
      lead="I'm always glad to hear about research opportunities, collaborations, or questions about my work."
    >
      <ul className="cv__list">
        <li className="cv__row">
          <div className="cv__period">Email</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">Affiliation</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>
              School of Atmospheric Sciences, Nanjing University, Nanjing, China
              <br />
              Currently on exchange at HKUST, Hong Kong SAR
            </p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">ORCID</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>
              <a href={SITE.orcid} target="_blank" rel="noreferrer noopener">
                0009-0003-6894-2678
              </a>
            </p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">GitHub</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>
              <a href={SITE.github} target="_blank" rel="noreferrer noopener">
                github.com/joy9163
              </a>
            </p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">LinkedIn</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer noopener">
                Jiayin Zhang
              </a>
            </p>
          </div>
        </li>
        <li className="cv__row">
          <div className="cv__period">CV</div>
          <div className="cv__body">
            <p style={{ margin: 0 }}>
              <a href={SITE.cv} download="Jiayin_Zhang_CV.pdf">
                Download PDF
              </a>
            </p>
          </div>
        </li>
      </ul>
    </SiteLayout>
  )
}
