import { useEffect, useRef } from "react"

const COARSE = '(hover: none), (pointer: coarse)';

/**
 * Scroll choreography for the page:
 *  - reveals every `.reveal` once it scrolls into view
 *  - keeps one card in focus and blurs the rest: hover picks the card on a
 *    mouse, scroll position picks it on touch, where there is no hover
 */
export default function useReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const root = ref.current;
        if (!root) return;

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );
        root.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

        const cards = [...root.querySelectorAll('.card')];
        const clear = () =>
            cards.forEach((card) => card.classList.remove('card-dim', 'in-view'));
        const focusOn = (target) =>
            cards.forEach((card) => {
                const active = card === target;
                card.classList.toggle('in-view', active);
                card.classList.toggle('card-dim', !active);
            });

        let unbind;

        if (window.matchMedia(COARSE).matches) {
            // No hover on touch, so the card nearest the middle of the screen takes focus.
            let frame = 0;
            const update = () => {
                frame = 0;
                const middle = window.innerHeight / 2;
                let nearest = null;
                let best = Infinity;

                cards.forEach((card) => {
                    const rect = card.getBoundingClientRect();
                    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
                    const distance = Math.abs(rect.top + rect.height / 2 - middle);
                    if (distance < best) {
                        best = distance;
                        nearest = card;
                    }
                });

                if (nearest) focusOn(nearest);
                else clear();
            };

            const schedule = () => {
                if (!frame) frame = requestAnimationFrame(update);
            };

            window.addEventListener('scroll', schedule, { passive: true });
            window.addEventListener('resize', schedule, { passive: true });
            schedule();

            unbind = () => {
                window.removeEventListener('scroll', schedule);
                window.removeEventListener('resize', schedule);
                if (frame) cancelAnimationFrame(frame);
                clear();
            };
        } else {
            // Pointer devices: the hovered card is the one in focus.
            const onMove = (event) => {
                const card = event.target.closest?.('.card');
                if (card && cards.includes(card)) focusOn(card);
                else clear();
            };

            root.addEventListener('mouseover', onMove);
            root.addEventListener('mouseleave', clear);

            unbind = () => {
                root.removeEventListener('mouseover', onMove);
                root.removeEventListener('mouseleave', clear);
                clear();
            };
        }

        return () => {
            revealObserver.disconnect();
            unbind?.();
        };
    }, []);

    return ref;
}
