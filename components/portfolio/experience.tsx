import { Briefcase, ChevronRight } from 'lucide-react'
import { experience } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section
      aria-labelledby="experience-heading"
      id="experience"
      className="border-y border-border bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading index="04" title="Experience" id="experience-heading" />
        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Briefcase className="size-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{experience.role}</h3>
              <p className="font-mono text-sm text-primary">{experience.organization}</p>
            </div>
          </div>
          <h4 className="mt-8 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Areas of work
          </h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {experience.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-4 py-3 text-sm"
              >
                <ChevronRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
