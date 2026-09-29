import { Cloud, Code, Monitor, Network, Radar, type LucideIcon } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const icons: LucideIcon[] = [Monitor, Network, Radar, Cloud, Code]

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading index="03" title="Technical Skills" id="skills-heading" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div key={group.label} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-semibold">{group.label}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
