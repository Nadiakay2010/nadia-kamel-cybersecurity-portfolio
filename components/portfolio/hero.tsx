import { ArrowUpRight, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { profile } from '@/lib/portfolio-data'

const roles = ['IT Support', 'Help Desk', 'SOC Analyst', 'Entry-Level Cybersecurity']

export function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:items-center md:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Open to opportunities
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-primary md:text-xl">{profile.title}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5')}>
                <Mail aria-hidden="true" />
                Get in touch
              </a>
            <a href="#projects" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5')}>
                View projects
                <ArrowUpRight aria-hidden="true" />
              </a>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card/80 font-mono text-sm shadow-2xl shadow-primary/5">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="size-3 rounded-full bg-destructive/70" aria-hidden="true" />
            <span className="size-3 rounded-full bg-yellow-400/70" aria-hidden="true" />
            <span className="size-3 rounded-full bg-primary/70" aria-hidden="true" />
            <span className="ml-2 text-xs text-muted-foreground">~/profile</span>
          </div>
          <div className="space-y-2 p-5 leading-relaxed">
            <p>
              <span className="text-primary">$</span> whoami
            </p>
            <p className="text-muted-foreground">{profile.name.toLowerCase()}</p>
            <p className="pt-2">
              <span className="text-primary">$</span> cat target_roles.txt
            </p>
            <ul className="text-muted-foreground">
              {roles.map((role) => (
                <li key={role}>
                  <span className="text-primary/70">{'>'}</span> {role}
                </li>
              ))}
            </ul>
            <p className="pt-2">
              <span className="text-primary">$</span>{' '}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" aria-hidden="true" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
