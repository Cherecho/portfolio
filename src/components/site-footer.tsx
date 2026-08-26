import Reveal from './reveal'

const CONTACT = [
  { label: 'Email', value: 'alvarocerezo212@gmail.com', href: 'mailto:alvarocerezo212@gmail.com' },
  { label: 'GitHub', value: 'github.com/Cherecho', href: 'https://github.com/Cherecho' },
  {
    label: 'LinkedIn',
    value: 'alvaro-cerezo-pedrero',
    href: 'https://www.linkedin.com/in/alvaro-cerezo-pedrero'
  }
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-line/60 py-14 sm:py-20">
      <Reveal>
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
          I read everything that arrives. Backend work, data platforms, or a
          pipeline that has stopped behaving — start anywhere.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {CONTACT.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="group block rounded-lg border border-line p-4 transition-colors duration-300 hover:border-signal/60 motion-reduce:transition-none"
              >
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {item.label}
                </span>
                <span className="mt-1.5 block truncate text-sm text-ink transition-colors duration-200 group-hover:text-signal">
                  {item.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Built with Next.js and Tailwind CSS · Set in Archivo, Instrument Sans
        and JetBrains Mono
      </p>
    </footer>
  )
}
