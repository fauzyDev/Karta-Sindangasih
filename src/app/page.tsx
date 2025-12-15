import Hero from '@/components/Hero'
import AnnouncementsPreview from '@/components/AnnouncementsPreview'
import NewsPreview from '@/components/NewsPreview'
import AboutSection from '@/components/AboutSection'
import Programs from '@/components/Programs'
import GalleryPreview from '@/components/GalleryPreview'
import LeaderPreview from '@/components/LeaderPreview'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AnnouncementsPreview />
      <NewsPreview />
      <AboutSection />
      <Programs />
      <GalleryPreview />
      <LeaderPreview />
      <ContactSection />
      <Footer />
    </div>
  )
}