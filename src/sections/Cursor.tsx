import styles from "./styles/cursor.module.scss"
import { useRef, useEffect } from "react"

interface CursorProps {
    /** CSS class name for custom styling */
    className?: string;
    /** Easing factor (0-1). Lower = smoother/slower. Default: 0.15 */
    easing?: number;
    /** Size of the cursor in pixels. Default: 16 */
    size?: number;
    /** Whether to hide on mouse leave. Default: true */
    hideOnLeave?: boolean;
    /** Custom inline styles */
    style?: React.CSSProperties;
}

const Cursor = ({ 
    className = styles.cursor,
    easing = 0.15,
    size = 16,
    hideOnLeave = true,
    style = {}
}: CursorProps) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);
    const mouse = useRef({
        x: 0,
        y: 0,
        currentX: 0,
        currentY: 0
    });

    useEffect(() => {
        // Track target mouse position
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            
            // Show cursor if hidden
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '1';
            }
        };

        const handleMouseLeave = () => {
            if (hideOnLeave && cursorRef.current) {
                cursorRef.current.style.opacity = '0';
            }
        };

        // Animation loop with easing
        const animate = () => {
            if (!cursorRef.current) return;

            // Lerp (linear interpolation) for smooth following
            mouse.current.currentX += (mouse.current.x - mouse.current.currentX) * easing;
            mouse.current.currentY += (mouse.current.y - mouse.current.currentY) * easing;

            // Update cursor position (center it by subtracting half size)
            const halfSize = size / 2;
            cursorRef.current.style.transform = 
                `translate3d(${mouse.current.currentX - halfSize}px, ${mouse.current.currentY - halfSize}px, 0)`;

            rafRef.current = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(rafRef.current);
        };
    }, [easing, size, hideOnLeave]);

    return (
        <div 
            ref={cursorRef}
            className={className}
            style={{
                width: size,
                height: size,
                opacity: 0,
                pointerEvents: 'none',
                ...style
            }}
            aria-hidden="true"
        />
    );
};

export default Cursor