import { useEffect } from "react"

export default function Background() {
    useEffect(() => {
        let frame = 0;
        const onMove = (e) => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
                document.documentElement.style.setProperty('--my', `${e.clientY}px`);
                frame = 0;
            });
        };
        // Touch devices get the same spotlight, driven by the finger.
        const onTouch = (e) => {
            const touch = e.touches[0];
            if (touch) onMove(touch);
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('touchmove', onTouch, { passive: true });
        window.addEventListener('touchstart', onTouch, { passive: true });
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('touchmove', onTouch);
            window.removeEventListener('touchstart', onTouch);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div aria-hidden="true">
            <div className="aurora-blob aurora-1" />
            <div className="aurora-blob aurora-2" />
            <div className="aurora-blob aurora-3" />
            <div className="grid-overlay" />
            <div className="spotlight" />
        </div>
    )
}
