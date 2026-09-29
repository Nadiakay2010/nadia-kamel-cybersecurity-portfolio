import { FolderGit2 } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading index="05" title="Projects" id="projects-heading" />
      <ul className="grid gap-4 md:grid-cols-3">
        {projects.map((project, i) => (
          <li
            key={project.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <FolderGit2 className="size-6 text-primary" aria-hidden="true" />
              <span className="font-mono text-xs text-muted-foreground">
                {`lab_0${i + 1}`}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-pretty">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tools`}>
              {project.tools.map((tool) => (
                <li key={tool} className="font-mono text-xs text-primary">
                  {`#${tool.replace(/\s+/g, '')}`}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
