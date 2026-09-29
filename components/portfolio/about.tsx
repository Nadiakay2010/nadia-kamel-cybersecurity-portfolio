import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './section-heading'

const interests = [
  'Troubleshooting',
  'Cybersecurity',
  'Networking',
  'Helping users',
  'Continuous learning',
]

export function About() {
  return (
    <section aria-labelledby="about-heading" id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading index="01" title="About Me" id="about-heading" />
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p className="text-pretty">
            I graduated from{' '}
            <span className="text-foreground">Wake Technical Community College</span> with an
            Associate degree in{' '}
            <span className="text-foreground">Information Technology – Cybersecurity</span>.
          </p>
          <p className="text-pretty">
            I am a determined, dependable professional who enjoys troubleshooting, cybersecurity,
            networking, helping users, and continuously learning new technologies.
          </p>
          <ul className="flex flex-wrap gap-2 pt-2" aria-label="Interests">
            {interests.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-secondary px-3 py-1 font-mono text-xs text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <GraduationCap className="size-5" aria-hidden="true" />
          </div>
          <h3 className="mt-5 font-mono text-xs uppercase tracking-wider text-primary">Education</h3>
          <p className="mt-2 font-semibold text-pretty">
            Associate Degree, Information Technology – Cybersecurity
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Wake Technical Community College</p>
        </div>
      </div>
    </section>
  )
}
