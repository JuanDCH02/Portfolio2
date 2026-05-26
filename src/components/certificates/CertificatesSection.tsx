import { FadeIn } from '../ui/FadeIn'

const certificates = [
    {
        image: '/certificado-1.png',
        title: 'Desarrollo Web Full Stack',
        institution: 'Udemy',
        badge: 'Udemy',
    },
    {
        image: '/certificado-2.png',
        title: 'Desarrollo Web Full Stack',
        institution: 'UTN.BA',
        badge: 'UTN.BA',
    },
]

export const CertificatesSection = () => {
    return (
        <section id="certificates" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <FadeIn className="text-center mb-14">
                    <h2 className="text-4xl font-black text-white mb-3">Certificaciones</h2>
                    <p className="text-white/60 text-lg">Formación formal completada</p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map(({ image, title, institution, badge }, i) => (
                        <FadeIn key={institution} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                            <a
                                href={image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-amber-400/30 hover:bg-white/8 transition-all duration-300"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Certificado ${title} - ${institution}`}
                                        className="w-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold border border-amber-400/40 bg-amber-400/15 text-amber-300 backdrop-blur-sm">
                                        {badge}
                                    </div>
                                </div>
                                <div className="px-6 py-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-semibold">{title}</p>
                                        <p className="text-white/50 text-sm">{institution}</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-amber-400 transition-colors duration-300 shrink-0">
                                        <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                    </svg>
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
