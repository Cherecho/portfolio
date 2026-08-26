import Reveal from './reveal'
import Section from './section'

const GROUPS = [
  {
    name: 'Languages',
    items: ['Python', 'SQL', 'Java', 'JavaScript', 'PHP']
  },
  {
    name: 'Backend & web',
    items: ['API development', 'FastAPI', 'Flask', 'React']
  },
  {
    name: 'Data & distributed systems',
    items: [
      'PySpark',
      'Data pipelines',
      'ETL / ELT',
      'Delta Lake',
      'Lakehouse architectures'
    ]
  },
  {
    name: 'Cloud & infrastructure',
    items: [
      'AWS (S3, Glue, Lambda)',
      'Microsoft Azure',
      'Microsoft Fabric',
      'OneLake',
      'Docker',
      'Git',
      'GitHub Actions',
      'Linux / Bash',
      'Grafana'
    ]
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'InfluxDB']
  }
]

export default function Stack() {
  return (
    <Section id="stack" label="Stack">
      <div className="space-y-8">
        {GROUPS.map((group, i) => (
          <Reveal key={group.name} delay={i * 60}>
            <div className="grid gap-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:pt-1.5">
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line bg-raised px-3 py-1.5 font-mono text-xs text-ink transition-colors duration-200 hover:border-signal/60 hover:text-signal motion-reduce:transition-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
