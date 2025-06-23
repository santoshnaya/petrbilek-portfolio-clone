import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProjectCards from '../components/ProjectCards'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProjectCards />
      <AboutSection />
      <Footer />
    </main>
  )
} 