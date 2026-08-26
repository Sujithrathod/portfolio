import { useEffect, useRef } from "react"

const COARSE = '(hover: none), (pointer: coarse)';

/**
 * Scroll choreography for the page:
 *  - reveals every `.reveal` once it scrolls into view
 *  - on touch devices, marks the `.card` sitting in the middle of the viewport
 *    with `is-visible`'s sibling class `in-view`, standing in for hover
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

        // Hovering a card keeps only that card sharp; the rest of the stack blurs back.
        let unbindHover;
        if (window.matchMedia('(hover: hover)').matches) {
            const cards = [...root.querySelectorAll('.card')];

            const clear = () => cards.forEach((card) => card.classList.remove('card-dim'));
            const focusOn = (index) =>
                cards.forEach((card, i) => card.classList.toggle('card-dim', i !== index));

            const onMove = (event) => {
                const card = event.target.closest?.('.card');
                const index = card ? cards.indexOf(card) : -1;
                if (index === -1) clear();
                else focusOn(index);
            };

            root.addEventListener('mouseover', onMove);
            root.addEventListener('mouseleave', clear);
            unbindHover = () => {
                root.removeEventListener('mouseover', onMove);
                root.removeEventListener('mouseleave', clear);
                clear();
            };
        }

        // Hover can't happen on touch, so proximity to the viewport centre stands in for it.
        let focusObserver;
        if (window.matchMedia(COARSE).matches) {
            focusObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        entry.target.classList.toggle('in-view', entry.isIntersecting);
                    });
                },
                { rootMargin: '-35% 0px -35% 0px' }
            );
            root.querySelectorAll('.card').forEach((el) => focusObserver.observe(el));
        }

        return () => {
            revealObserver.disconnect();
            focusObserver?.disconnect();
            unbindHover?.();
        };
    }, []);

    return ref;
}
