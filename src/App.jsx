import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground dark selection:bg-white/20">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}

export default App
