import { FadeIn } from '../ui/FadeIn'

const imgJasi1 = '/jasihome-1.png'
const imgJasi2 = '/jasihome-2.png'
const img1 = '/app-rectas-1.png'
const img2 = '/app-recetas-2.png'
const img3 = '/app-recetas-3.png'
const img4 = '/uptask-1.png'
const img5 = '/uptask-2.png'

type Project = {
    title: string
    description: string
    stack: string[]
    images: string[]
    url: string
}

const featuredProject: Project = {
    title: "Jasi Home — Tienda de Decoración & Muebles",
    description:
        "E-commerce completo y en producción para una tienda real de decoración de interiores y muebles. Incluye autenticación de usuarios, contacto directo por WhatsApp y email, y panel de administrador con estadísticas de ventas y gestión de pedidos.",
    stack: ["PostgreSQL", "Express", "React", "Node.js", "JWT"],
    images: [imgJasi1, imgJasi2],
    url: "https://jasihomedeco.com",
}

const secondaryProjects: Project[] = [
    {
        title: "Aplicación de Recetas",
        description:
            "App CRUD de recetas con visibilidad pública. Solo el creador puede editar o eliminar sus recetas. Incluye sistema de Likes, comentarios y autenticación con JWT.",
        stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
        images: [img1, img2, img3],
        url: "https://mi-receta-app-codex-enhanced.netlify.app/",
    },
    {
        title: "Control de Proyectos",
        description:
            "Gestión de proyectos con tablero de tareas y estados. Permite agregar compañeros, dejar notas, y comentar en tareas. Autenticación con confirmación de email obligatoria.",
        stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
        images: [img4, img5],
        url: "https://up-task-mern-beta.vercel.app/",
    },
]

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    </svg>
)

const StackTags = ({ stack }: { stack: string[] }) => (
    <div className="flex flex-wrap gap-2 pt-1">
        {stack.map((tech) => (
            <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium border border-amber-400/30 bg-amber-400/10 text-amber-300"
            >
                {tech}
            </span>
        ))}
    </div>
)

const ProjectLink = ({ url }: { url: string }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-sm font-medium hover:bg-amber-400/20 hover:scale-105 transition-all duration-300"
    >
        <ExternalLinkIcon />
        Ver proyecto
    </a>
)

const FeaturedProjectCard = ({ project }: { project: Project }) => (
    <FadeIn direction="left" delay={100}>
        <div className="rounded-3xl border border-amber-400/30 bg-amber-400/5 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_-15px_rgba(251,191,36,0.4)]">
            <div className="flex items-center gap-2 px-6 pt-5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-black">
                    Proyecto destacado
                </span>
                <span className="text-xs text-amber-300/80">En producción · Cliente real</span>
            </div>

            {/* Images */}
            <div className="flex gap-3 p-5 overflow-x-auto scrollbar-none">
                {project.images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="rounded-xl object-cover shrink-0 h-64 w-auto shadow-lg"
                    />
                ))}
            </div>

            {/* Info */}
            <div className="px-6 pb-6 space-y-3">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-white/80 leading-relaxed text-md">{project.description}</p>
                <StackTags stack={project.stack} />
                <ProjectLink url={project.url} />
            </div>
        </div>
    </FadeIn>
)

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <FadeIn direction={index % 2 === 0 ? 'left' : 'right'} delay={100}>
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            {/* Images */}
            <div className="flex gap-3 p-5 overflow-x-auto scrollbar-none">
                {project.images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="rounded-xl object-cover shrink-0 h-52 w-auto shadow-lg"
                    />
                ))}
            </div>

            {/* Info */}
            <div className="px-6 pb-6 space-y-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white/80 leading-relaxed text-md">{project.description}</p>
                <StackTags stack={project.stack} />
                <ProjectLink url={project.url} />
            </div>
        </div>
    </FadeIn>
)

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-5xl mx-auto space-y-8">
                <FadeIn className="text-center mb-14">
                    <h2 className="text-4xl font-black text-white mb-3">Mis Proyectos</h2>
                    <p className="text-white/60 text-lg">Algunas cosas que he construido</p>
                </FadeIn>

                <FeaturedProjectCard project={featuredProject} />

                <FadeIn className="pt-10 pb-2">
                    <h3 className="text-2xl font-bold text-white">Proyectos personales</h3>
                    <p className="text-white/60">Otras cosas que he construido para aprender y practicar</p>
                </FadeIn>

                {secondaryProjects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </section>
    )
}
