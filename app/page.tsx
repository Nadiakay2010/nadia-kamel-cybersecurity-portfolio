import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Certifications } from '@/components/portfolio/certifications'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Contact } from '@/components/portfolio/contact'
import { profile } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-center font-mono text-xs text-muted-foreground sm:flex-row">
          <p>
            {'© '}
            {new Date().getFullYear()} {profile.name}
          </p>
          <p>{profile.title}</p>
        </div>
      </footer>
    </>
  )
}
