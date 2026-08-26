import Reveal from './reveal'
import Section from './section'

type Role = {
  company: string
  href: string
  title: string
  note?: string
  from: string
  to: string
  place: string
  domain: string
  points: string[]
  stack: string[]
}

const ROLES: Role[] = [
  {
    company: 'BRUC Energy',
    href: 'https://brucenergy.com/',
    title: 'Data Scientist',
    from: '2026.05',
    to: 'NOW',
    place: 'Madrid, Spain',
    domain: 'Renewable energy',
    points: [
      'Design and build data applications and processing workflows in Python, PySpark and SQL on Microsoft Fabric for renewable-energy operations.',
      'Maintain pipelines and Lakehouse components across OneLake and Delta Lake, with data quality and traceability treated as requirements rather than afterthoughts.',
      'Replace recurring manual operational processes with repeatable engineered workflows.',
      'Turn business requirements into implementations that span ingestion, transformation, validation and downstream consumption.'
    ],
    stack: [
      'Python',
      'PySpark',
      'SQL',
      'Microsoft Fabric',
      'OneLake',
      'Delta Lake'
    ]
  },
  {
    company: 'NTT DATA Europe & Latam',
    href: 'https://www.nttdata.com/',
    title: 'Data Engineer',
    from: '2025.09',
    to: '2026.05',
    place: 'Remote — Madrid, Spain',
    domain: 'EU data governance',
    points: [
      'Built event-driven ingestion and transformation pipelines on AWS S3, Glue and Lambda with PySpark, plus Dockerised microservices for ingestion and preprocessing.',
      'Designed and maintained Python and SQL ETL pipelines for structured and semi-structured data, covering ingestion, transformation and validation.',
      'Applied semantic technologies and knowledge graphs inside a European Union AI-ready data-governance initiative to improve interoperability and traceability.'
    ],
    stack: [
      'Python',
      'PySpark',
      'AWS S3',
      'AWS Glue',
      'AWS Lambda',
      'Docker',
      'Knowledge graphs'
    ]
  },
  {
    company: 'Ryü Capital',
    href: 'https://ryucapital.com/',
    title: 'Software Engineer II',
    note: 'Promoted from Software Engineer I · 2022.07 — 2024.06',
    from: '2022.07',
    to: '2025.03',
    place: 'Remote — Zurich, Switzerland',
    domain: 'Algorithmic trading',
    points: [
      'Led design and implementation of Python backend APIs and services in FastAPI and Flask for algorithmic-trading and financial analytics systems.',
      'Wrote Python and PySpark workflows to ingest, clean and structure large financial and market datasets, backed by SQL and time-series databases.',
      'Maintained Grafana monitoring and Python diagnostics tooling for strategy and system performance, and handled the troubleshooting that came with it.'
    ],
    stack: [
      'Python',
      'FastAPI',
      'Flask',
      'PySpark',
      'InfluxDB',
      'SQL',
      'Grafana'
    ]
  },
  {
    company: 'Hogarth Worldwide',
    href: 'https://www.hogarth.com/',
    title: 'Software Developer Intern',
    from: '2022.04',
    to: '2022.06',
    place: 'Hybrid — Madrid, Spain',
    domain: 'Advertising production',
    points: [
      'Worked on React and JavaScript web applications and PHP backend components, debugging and improving existing code alongside senior developers.'
    ],
    stack: ['React', 'JavaScript', 'PHP']
  },
  {
    company: 'CGI',
    href: 'https://www.cgi.com/',
    title: 'Java Developer Intern',
    from: '2020.04',
    to: '2020.06',
    place: 'Hybrid — Madrid, Spain',
    domain: 'Enterprise IT',
    points: [
      'Maintained Java enterprise applications through defect fixes, code review and technical documentation.'
    ],
    stack: ['Java']
  }
]

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      {/* The rail is the chronology; each node is one role on it. */}
      <ol className="relative space-y-3 border-l border-line pl-6 sm:pl-10">
        {ROLES.map((role, i) => (
          <li key={role.company}>
            <Reveal delay={i * 70}>
              <article className="group relative -ml-6 rounded-lg px-6 py-6 transition-colors duration-300 hover:bg-surface/40 sm:-ml-10 sm:px-10 motion-reduce:transition-none">
                <span
                  aria-hidden="true"
                  className="absolute left-[-4.5px] top-8 h-[9px] w-[9px] bg-line transition-colors duration-300 group-hover:bg-signal motion-reduce:transition-none"
                />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  <span className="text-flow">
                    {role.from} → {role.to}
                  </span>
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                  <span>{role.domain}</span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  <a
                    href={role.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-signal motion-reduce:transition-none"
                  >
                    {role.company}
                  </a>
                </h3>

                <p className="mt-1 text-base text-flow">{role.title}</p>

                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {role.place}
                </p>
                {role.note ? (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted/70">
                    {role.note}
                  </p>
                ) : null}

                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted sm:text-base">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] h-[3px] w-[3px] shrink-0 bg-signal/70"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:border-flow/40 group-hover:text-flow motion-reduce:transition-none"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
