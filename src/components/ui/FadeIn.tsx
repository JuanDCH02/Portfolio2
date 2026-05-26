import { useInView } from '../../hooks/useInView'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

type Props = {
    children: React.ReactNode
    delay?: number
    direction?: Direction
    className?: string
}

const offsets: Record<Direction, string> = {
    up: 'translateY(28px)',
    down: 'translateY(-28px)',
    left: 'translateX(-28px)',
    right: 'translateX(28px)',
    none: 'none',
}

export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: Props) => {
    const { ref, inView } = useInView()

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : offsets[direction],
                transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    )
}
