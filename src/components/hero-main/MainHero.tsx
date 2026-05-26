import GithubLogo from '../../assets/github-svgrepo-com.svg'

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
)

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
)

export const MainHero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 animate__animated animate__fadeIn">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24">

                {/* Text side */}
                <div className="space-y-7 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        Disponible para trabajar
                    </div>

                    <div>
                        <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                            Juan
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-500">
                                Clemente
                            </span>
                        </h1>
                        <p className="text-amber-500 italic font-mono text-lg mt-3 tracking-widest uppercase ">
                            FullStack Developer
                        </p>
                    </div>

                    <p className="text-slate-800 text-lg leading-relaxed max-w-md">
                        Desarrollador web apasionado por construir aplicaciones modernas y funcionales.
                        Especializado en el stack MERN con experiencia en Express y TypeScript.
                    </p>

                    <div className="flex gap-3 flex-wrap">
                        <a
                            href="https://github.com/JuanDCH02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm font-medium"
                        >
                            <img src={GithubLogo} alt="" className="w-5 h-5 invert" />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/juan-clemente-9419b3288/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600/20 border border-blue-400/30 text-blue-300 hover:bg-blue-600/30 hover:scale-105 transition-all duration-300 font-medium"
                        >
                            <LinkedInIcon />
                            LinkedIn
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-300 hover:bg-amber-500/30 hover:scale-105 transition-all duration-300 font-medium"
                        >
                            <MailIcon />
                            Contacto
                        </a>
                    </div>
                </div>

                {/* Photo side */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative">
                        <div className="absolute inset-0 bg-amber-400/25 blur-3xl rounded-full scale-90 animate-pulse" style={{ animationDuration: '4s' }} />
                        <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-amber-400/30 to-transparent blur-sm" />
                        <img
                            className="relative rounded-3xl border-2 border-amber-400/40 w-72 lg:w-88 object-cover shadow-2xl"
                            src="/foto-main.png"
                            alt="Juan Clemente - FullStack Developer"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}
