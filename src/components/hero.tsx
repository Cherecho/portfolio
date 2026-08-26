import LatticeField from './lattice-field'

const LINKS = [
  { href: './cv/Alvaro_Cerezo_Software_Engineer.pdf', label: 'Read the CV' },
  { href: 'https://github.com/Cherecho', label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/alvaro-cerezo-pedrero',
    label: 'LinkedIn'
  },
  { href: 'mailto:alvarocerezo212@gmail.com', label: 'Email' }
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <LatticeField />
      {/* Keeps the type legible over the field without flattening it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(115%_75%_at_18%_45%,rgba(4,9,26,0.93)_0%,rgba(4,9,26,0.6)_42%,rgba(4,9,26,0.1)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ground"
      />

      <div className="relative mx-auto w-full max-w-shell px-6 py-28 sm:px-10">
        <p
          className="rise font-mono text-xs uppercase tracking-[0.28em] text-flow"
          style={{ '--rise-delay': '120ms' } as React.CSSProperties}
        >
          Madrid, Spain — 4+ years in production
        </p>

        <h1
          className="rise mt-6 font-display font-extrabold leading-[0.88] tracking-[-0.03em] text-[clamp(2.7rem,8.5vw,6.75rem)]"
          style={
            { '--rise-delay': '240ms', fontStretch: '125%' } as React.CSSProperties
          }
        >
          Álvaro Cerezo
          <br />
          Pedrero
        </h1>

        <p
          className="rise mt-6 max-w-2xl font-display text-lg text-signal sm:text-xl"
          style={{ '--rise-delay': '380ms' } as React.CSSProperties}
        >
          Software engineer — backend and data platforms
        </p>

        <p
          className="rise mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ '--rise-delay': '480ms' } as React.CSSProperties}
        >
          I build Python APIs and the pipelines that feed them: ingestion,
          transformation, validation, and the monitoring that proves it all
          still runs. Four years across algorithmic trading, EU data
          governance, and renewable-energy operations.
        </p>

        <ul
          className="rise mt-10 flex flex-wrap items-center gap-x-3 gap-y-3"
          style={{ '--rise-delay': '600ms' } as React.CSSProperties}
        >
          {LINKS.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className={
                  i === 0
                    ? 'sheen relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-ground transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none'
                    : 'inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors duration-200 hover:border-flow hover:text-flow'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#about"
        aria-label="Skip to About"
        className="group absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted transition-colors group-hover:text-signal">
          About
        </span>
        {/* Runs off the bottom edge and fades out, so it reads as the page
            carrying on rather than a line stopping in mid-air. */}
        <span className="relative block h-20 w-px overflow-hidden bg-gradient-to-b from-line to-transparent">
          <span className="current-run absolute inset-x-0 top-0 block h-6 bg-gradient-to-b from-transparent via-signal to-transparent" />
        </span>
      </a>
    </section>
  )
}
