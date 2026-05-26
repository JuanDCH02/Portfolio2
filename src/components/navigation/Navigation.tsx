const navLinks = [
    { label: "Sobre mí", href: "#about" },
    { label: "Tecnologías", href: "#technologies" },
    { label: "Proyectos", href: "#projects" },
    { label: "Certificados", href: "#certificates" },
]

export const Navigation = () => {
    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="p-4 animate__animated animate__fadeInDown fixed top-0 left-0 right-0 z-50">
            <nav className="flex justify-center">
                <ul className="flex gap-0.5 p-1.5 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-3xl shadow-xl shadow-black/30">
                    {navLinks.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={(e) => handleNav(e, href)}
                                className="block text-sm font-medium text-white/90 px-4 py-2 rounded-xl hover:bg-white/10 hover:text-amber-400 transition-all duration-200 cursor-pointer"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
