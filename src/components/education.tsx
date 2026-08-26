import Reveal from './reveal'
import Section from './section'

const STUDIES = [
  {
    school: 'U-tad',
    href: 'https://u-tad.com/',
    award: "Bachelor's Degree in Software Engineering",
    detail: 'Specialisation in Data Engineering — in progress',
    span: '2023 → NOW'
  },
  {
    school: 'Campus FP',
    href: 'https://campusfp.es/',
    award: 'Higher Technician Diploma',
    detail: 'Cross-Platform Application Development',
    span: '2020 → 2022'
  },
  {
    school: 'La Salle Griñón',
    href: 'https://lasallegrinon.es/',
    award: 'Intermediate Vocational Training Certificate',
    detail: 'Microcomputer Systems and Networks',
    span: '2018.09 → 2020.06'
  }
]

export default function Education() {
  return (
    <Section id="education" label="Education">
      <ul className="divide-y divide-line/60 border-y border-line/60">
        {STUDIES.map((study, i) => (
          <li key={study.school}>
            <Reveal delay={i * 70}>
              <a
                href={study.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-2 py-6 transition-colors duration-300 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:gap-6 motion-reduce:transition-none"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] whitespace-nowrap text-flow sm:pt-1">
                  {study.span}
                </span>
                <span>
                  <span className="block font-display text-lg font-bold tracking-tight text-ink transition-colors duration-200 group-hover:text-signal">
                    {study.award}
                  </span>
                  <span className="mt-1 block text-sm text-muted sm:text-base">
                    {study.detail}
                  </span>
                  <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {study.school}
                  </span>
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
