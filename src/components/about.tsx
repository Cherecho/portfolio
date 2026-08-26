import Reveal from './reveal'
import Section from './section'

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <Reveal>
            <p>
              I am a software engineer in Madrid, four years into building
              Python APIs, backend services and data-intensive processing
              systems. Most of that time has been spent on the unglamorous half
              of the work: making pipelines repeatable, making failures
              visible, and making the next person able to change the code
              without fear.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              The domains have changed more than the work has. Algorithmic
              trading at{' '}
              <span className="text-ink">Ryü Capital</span> taught me latency
              and correctness under load. An EU data-governance programme at{' '}
              <span className="text-ink">NTT DATA</span> taught me that
              traceability is a feature. At{' '}
              <span className="text-ink">BRUC Energy</span> I now build the
              Lakehouse components behind renewable-energy operations, where a
              wrong number has a physical meaning.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              Alongside that I am finishing a software engineering degree at
              U-tad, specialising in data engineering.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <figure className="w-40 sm:w-48">
            {/* Frame tracks the image only, never the caption. */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-2 -top-2 h-full w-full border border-signal/40"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="./photo/alvaro-cerezo-440.jpg"
                srcSet="./photo/alvaro-cerezo-220.jpg 220w, ./photo/alvaro-cerezo-440.jpg 440w"
                sizes="(max-width: 640px) 160px, 192px"
                alt="Álvaro Cerezo Pedrero"
                width={440}
                height={440}
                loading="lazy"
                className="relative block w-full grayscale transition duration-500 hover:grayscale-0 motion-reduce:transition-none"
              />
            </div>
            <figcaption className="mt-4 space-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span className="block">Spanish — native</span>
              <span className="block">English — C1</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}
