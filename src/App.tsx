import BackgroundParticles from "./components/background/BackgroundParticles"
import { MainHero } from "./components/hero-main/MainHero"
import { Navigation } from "./components/navigation/Navigation"
import { ProjectsSection } from "./components/projects/ProjectsSection"
import { Technologies } from "./components/tech/Technologies"
import { CertificatesSection } from "./components/certificates/CertificatesSection"
import { ContactSection } from "./components/contact/ContactSection"

function App() {
    return (
        <>
            <BackgroundParticles />
            <div className="bg-radial-[at_15%_30%] from-slate-300 to-zinc-900 to-70%">
                <Navigation />
                <MainHero />
                <Technologies />
                <ProjectsSection />
                <CertificatesSection />
                <ContactSection />
            </div>
        </>
    )
}

export default App
