import { useState } from 'react'
import { FadeIn } from '../ui/FadeIn'

type Status = 'idle' | 'sending' | 'success' | 'error'

export const ContactSection = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')
        try {
            const res = await fetch('https://formspree.io/f/mlgvnzrj', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(form),
            })
            if (res.ok) {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-2xl mx-auto">
                <FadeIn className="text-center mb-14">
                    <h2 className="text-4xl font-black text-white mb-3">Contacto</h2>
                    <p className="text-white/60 text-lg">¿Tenés un proyecto en mente? Hablemos.</p>
                </FadeIn>

                <FadeIn delay={100}>
                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                        {status === 'success' ? (
                            <div className="text-center py-10 space-y-3">
                                <div className="text-4xl">✓</div>
                                <p className="text-white text-xl font-semibold">¡Mensaje enviado!</p>
                                <p className="text-white/60">Te respondo pronto.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 text-amber-400 text-sm hover:text-amber-300 transition-colors underline underline-offset-4"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-white/70 text-sm font-medium">Nombre</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tu nombre"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/8 transition-all duration-200"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white/70 text-sm font-medium">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="tu@email.com"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/8 transition-all duration-200"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white/70 text-sm font-medium">Mensaje</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Contame de qué se trata..."
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/8 transition-all duration-200 resize-none"
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-400 text-sm">Algo salió mal. Intentá de nuevo o escribime directo a juandclementeh@gmail.com</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-3 px-6 rounded-xl font-semibold bg-amber-500/20 border border-amber-400/40 text-amber-300 hover:bg-amber-500/30 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                >
                                    {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                                </button>
                            </form>
                        )}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
