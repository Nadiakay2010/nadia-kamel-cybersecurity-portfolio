import { Award } from 'lucide-react'
import { certifications } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Certifications() {
  return (
    <section
      aria-labelledby="certifications-heading"
      id="certifications"
      className="border-y border-border bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading index="02" title="Certifications" id="certifications-heading" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Award className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold leading-snug text-pretty">{cert.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
