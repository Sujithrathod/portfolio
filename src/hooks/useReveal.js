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
        };
    }, []);

    return ref;
}
