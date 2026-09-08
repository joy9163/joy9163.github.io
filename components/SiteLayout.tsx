'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Mail, Github, Linkedin, FileText, MapPin, GraduationCap } from 'lucide-react'
import { SITE, NAV } from '@/lib/site'

function Masthead() {
  const pathname = usePathname()
  const normalize = (p: string) => (p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p)
  const current = normalize(pathname || '/')

  return (
    <header className="masthead">
      <div className="masthead__inner-wrap">
        <Link href="/" className="site-title">
          {SITE.name}
          <span className="site-subtitle">{SITE.tagline}</span>
        </Link>
        <nav className="greedy-nav" aria-label="Main">
          {NAV.map((item) => {
            const active =
              item.href === '/'
                ? current === '/' || current === '/about'
                : current === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? 'is-active' : undefined}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

function AuthorSidebar() {
  return (
    <aside className="sidebar" aria-label="Author">
      <Link href="/" className="author__avatar">
        <Image
          src="/profile-photo.jpg"
          alt={SITE.name}
          width={150}
          height={150}
          priority
        />
      </Link>
      <div className="author__profile">
        <h2 className="author__name">{SITE.name}</h2>
        <p className="author__pronouns">{SITE.nameCn}</p>
        <p className="author__bio">
          Visiting research intern at <strong>Stanford</strong>, in the Sino-Finnish
          dual-degree program at <strong>Nanjing University</strong> and the{' '}
          <strong>University of Helsinki</strong>. I work on atmospheric chemistry,
          urban air quality, BVOCs, and observation-driven machine learning.
        </p>
        <ul className="author__urls">
          <li>
            <span
              style={{ display: 'flex', alignItems: 'center', gap: '0.6em', fontSize: '0.83rem' }}
            >
              <GraduationCap size={16} strokeWidth={1.75} style={{ color: 'var(--ap-muted)' }} />
              Stanford University
            </span>
          </li>
          <li>
            <span
              style={{ display: 'flex', alignItems: 'center', gap: '0.6em', fontSize: '0.83rem' }}
            >
              <MapPin size={16} strokeWidth={1.75} style={{ color: 'var(--ap-muted)' }} />
              {SITE.location}
            </span>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`}>
              <Mail size={16} strokeWidth={1.75} />
              Email
            </a>
          </li>
          <li>
            <a href={SITE.github} target="_blank" rel="noreferrer noopener">
              <Github size={16} strokeWidth={1.75} />
              GitHub
            </a>
          </li>
          <li>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin size={16} strokeWidth={1.75} />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={SITE.cv} download="Jiayin_Zhang_CV.pdf">
              <FileText size={16} strokeWidth={1.75} />
              Curriculum Vitae
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

function SiteFooter() {
  return (
    <footer className="page__footer">
      <div className="page__footer-inner">
        <div>
          © {new Date().getFullYear()} {SITE.name}. Last updated September 2026.
        </div>
        <div className="footer__links">
          <a href={`mailto:${SITE.email}`}>Email</a>
          <a href={SITE.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default function SiteLayout({
  title,
  lead,
  children,
}: {
  title?: string
  lead?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <Masthead />
      <div className="initial-content">
        <AuthorSidebar />
        <main className="page">
          {title && <h1 className="page__title">{title}</h1>}
          {lead && <p className="page__lead">{lead}</p>}
          <div className="page__content">{children}</div>
        </main>
      </div>
      <SiteFooter />
    </>
  )
}
