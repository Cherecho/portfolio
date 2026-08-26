import Reveal from './reveal'

type Props = {
  id: string
  label: string
  children: React.ReactNode
}

/*
  Section label lives in a narrow gutter and sticks while its section scrolls,
  so you always know which part of the record you are reading.
*/
export default function Section({ id, label, children }: Props) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line/60 py-14 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-12">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal>
            <h2 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-muted md:flex-col md:items-start md:gap-2">
              <span aria-hidden="true" className="h-px w-8 bg-signal md:w-6" />
              {label}
            </h2>
          </Reveal>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
