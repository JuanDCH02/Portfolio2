import BackgroundParticles from "./components/background/BackgroundParticles"
import { MainHero } from "./components/hero-main/MainHero"
import { Navigation } from "./components/navigation/Navigation"
import { ProjectsSection } from "./components/projects/ProjectsSection"
import { Technologies } from "./components/tech/Technologies"





function App() {

    return (
        <>
            <BackgroundParticles />
            {/* <div className="bg-linear-to-b from-gray-900 to-gray-400"> */}
            <div className="bg-radial-[at_15%_30%] from-slate-300 to-zinc-900 to-70%">
            <Navigation />
            <MainHero />
            <Technologies/>
            <ProjectsSection/>
            </div>
        </>
    )
}

export default App
