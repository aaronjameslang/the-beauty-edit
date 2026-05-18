import SiteNav from '@/components/nav/SiteNav'
import Hero from '@/components/hero/Hero'
import EditorialGrid from '@/components/editorial/EditorialGrid'
import About from '@/components/about/About'
import Services from '@/components/services/Services'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <EditorialGrid />
        <About />
        <Services />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
