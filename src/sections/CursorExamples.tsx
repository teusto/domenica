import Cursor from './Cursor';
import styles from './styles/cursor.module.scss';

/**
 * USAGE EXAMPLES
 * 
 * This file demonstrates different ways to use the custom Cursor component.
 * Delete this file after reviewing the examples.
 */

export const CursorExamples = () => {
    return (
        <>
            {/* EXAMPLE 1: Default cursor */}
            <Cursor />

            {/* EXAMPLE 2: Faster following (higher easing) */}
            <Cursor easing={0.3} />

            {/* EXAMPLE 3: Slower, smoother following (lower easing) */}
            <Cursor easing={0.08} />

            {/* EXAMPLE 4: Larger cursor */}
            <Cursor size={32} />

            {/* EXAMPLE 5: Custom styling with inline styles */}
            <Cursor 
                size={24}
                style={{
                    backgroundColor: '#ff0000',
                    border: '2px solid white',
                    mixBlendMode: 'normal',
                }}
            />

            {/* EXAMPLE 6: Custom CSS class */}
            <Cursor 
                className="my-custom-cursor"
                size={20}
            />

            {/* EXAMPLE 7: Don't hide on mouse leave */}
            <Cursor hideOnLeave={false} />

            {/* EXAMPLE 8: Full customization */}
            <Cursor 
                easing={0.12}
                size={28}
                hideOnLeave={true}
                style={{
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
            />
        </>
    );
};

/**
 * CUSTOM CURSOR SHAPES
 * 
 * To create different cursor shapes, create new CSS modules:
 */

// Example: cursor-arrow.module.scss
/*
.cursorArrow {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 20px solid white;
    pointer-events: none;
    z-index: 9999;
    will-change: transform;
    mix-blend-mode: difference;
}
*/

// Then use it:
// <Cursor className={arrowStyles.cursorArrow} size={20} />

/**
 * PRO TIPS:
 * 
 * 1. Easing values:
 *    - 0.05-0.1: Very smooth, laggy (artistic effect)
 *    - 0.15-0.2: Balanced (recommended)
 *    - 0.3-0.5: Snappy, responsive
 *    - 0.8-1.0: Almost no easing (instant)
 * 
 * 2. Performance:
 *    - Uses requestAnimationFrame (60fps)
 *    - Direct DOM manipulation (no React re-renders)
 *    - Hardware accelerated with translate3d
 * 
 * 3. Accessibility:
 *    - aria-hidden="true" (screen readers ignore it)
 *    - pointer-events: none (doesn't interfere with clicks)
 * 
 * 4. Hide native cursor:
 *    Add to your global CSS:
 *    body { cursor: none; }
 */
