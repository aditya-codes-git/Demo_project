import { HomeDemo } from './components/blocks/HomeDemo'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'
import { ShaderAnimation } from './components/ui/shader-animation'

import { ReactLenis } from 'lenis/react'
import { CustomCursor } from './components/CustomCursor'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
      <main className="relative min-h-screen bg-background text-primary selection:bg-white/20">
        <CustomCursor />

        {/* Global Cinematic Background System */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-40 mix-blend-screen">
            <ShaderAnimation />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>

        {/* The noise overlay */}
        <div className="noise" />

        {/* Content Layers */}
        <div className="relative z-10">
          <HomeDemo />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
    </ReactLenis>
  )
}

export default App
