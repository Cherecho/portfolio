import About from '@components/about'
import Education from '@components/education'
import Experience from '@components/experience'
import Hero from '@components/hero'
import SiteFooter from '@components/site-footer'
import SiteHeader from '@components/site-header'
import Stack from '@components/stack'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <div className="mx-auto max-w-shell px-6 sm:px-10">
          <About />
          <Experience />
          <Education />
          <Stack />
          <SiteFooter />
        </div>
      </main>
    </>
  )
}
