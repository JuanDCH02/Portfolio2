import ReactLogo from "../../assets/react.svg"
import GithubLogo from "../../assets/github-svgrepo-com.svg"
import MongoLogo from "../../assets/mongodb-svgrepo-com.svg"
import NodeLogo from "../../assets/node-16-svgrepo-com.svg"
import TSLogo from "../../assets/typescript-svgrepo-com.svg"
import ViteLogo from "../../assets/vite.svg"
import PrismaLogo from "../../assets/light-prisma-svgrepo-com.svg"
import { FadeIn } from "../ui/FadeIn"

const techs = [
    { src: ReactLogo, name: "React", invert: false },
    { src: TSLogo, name: "TypeScript", invert: false },
    { src: NodeLogo, name: "Node.js", invert: false },
    { src: MongoLogo, name: "MongoDB", invert: false },
    { src: PrismaLogo, name: "Prisma", invert: false },
    { src: ViteLogo, name: "Vite", invert: false },
    { src: GithubLogo, name: "Git / GitHub", invert: true },
]

export const Technologies = () => {
    return (
        <section id="technologies" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <FadeIn className="text-center mb-14">
                    <h2 className="text-4xl font-black text-white mb-3">Stack tecnológico</h2>
                    <p className="text-white/60 text-lg">Herramientas con las que trabajo día a día</p>
                </FadeIn>

                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                    {techs.map(({ src, name, invert }, i) => (
                        <FadeIn key={name} delay={i * 60} direction="up">
                            <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-400/40 hover:scale-105 transition-all duration-300 cursor-default h-full">
                                <img
                                    className={`w-10 h-10 object-contain group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-all duration-300${invert ? ' invert' : ''}`}
                                    src={src}
                                    alt={name}
                                />
                                <span className="text-white/70 text-xs font-medium text-center group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                                    {name}
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={500} direction="up">
                    <p className="text-center text-white/80 text-md mt-10 max-w-xl mx-auto">
                        Además, estoy integrando activamente tecnologías de agentes de IA como{' '}
                        <span className="text-amber-400 font-medium">Claude Code</span> e IDEs con IA como{' '}
                        <span className="text-amber-400 font-medium">Antigravity</span> en mi flujo de desarrollo.
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}
