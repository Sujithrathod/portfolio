import { useEffect, useRef, useState } from "react"

const SECTIONS = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications'];
const MOBILE_SECTIONS = SECTIONS.slice(1);

const SOCIALS = [
    {
        label: 'GitHub',
        href: 'https://github.com/Sujithrathod',
        path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sujith-rathod/',
        path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    },
    {
        label: 'LeetCode',
        href: 'https://leetcode.com/u/hWtpEfPw9L/',
        path: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z',
    },
    {
        label: 'X',
        href: 'https://x.com/sujithrathod20',
        path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    },
];

export default function Nav() {
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [progress, setProgress] = useState(0);
    const railRef = useRef(null);

    useEffect(() => {
        // Default to dark on mount
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        setIsDarkMode(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 140;
            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const section = document.getElementById(SECTIONS[i]);
                if (!section) continue;
                const top = section.getBoundingClientRect().top + window.scrollY;
                if (top <= scrollPosition) {
                    setActiveSection(SECTIONS[i]);
                    break;
                }
            }

            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const rail = railRef.current;
        if (!rail) return;
        const chip = rail.querySelector(`[data-section="${activeSection}"]`);
        if (chip) {
            const chipRect = chip.getBoundingClientRect();
            const railRect = rail.getBoundingClientRect();
            const offset = rail.scrollLeft + (chipRect.left - railRect.left);
            rail.scrollTo({
                left: offset - (rail.clientWidth - chipRect.width) / 2,
                behavior: 'smooth',
            });
        }
    }, [activeSection]);

    // #home is the sticky rail, so it is always "in view" and scrollIntoView
    // does nothing there. Going home means going to the top of the page.
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const scrollToSection = (sectionId) => {
        if (sectionId === 'home') return scrollToTop();
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleDarkMode = () => {
        const next = !document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark', next);
        document.body.classList.toggle('dark', next);
        setIsDarkMode(next);
    };

    return (
        <>
            {/* Scroll progress */}
            <div
                className="fixed top-0 left-0 h-1 z-[60] rounded-r-full"
                style={{
                    width: `${progress}%`,
                    background: 'var(--accent)',
                    boxShadow: '0 0 14px var(--accent-faint)',
                }}
            />

            {/* Floating dock */}
            <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <div
                    className="rounded-full px-3 py-2 flex items-center gap-1.5 border backdrop-blur-xl"
                    style={{
                        background: 'color-mix(in srgb, var(--bg-secondary) 78%, transparent)',
                        borderColor: 'var(--card-border)',
                        boxShadow: '0 18px 45px -18px rgba(0,0,0,0.7)',
                    }}
                >
                    <DockButton label="Home" color="var(--accent)" onClick={() => scrollToSection('home')} active={activeSection === 'home'}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                    </DockButton>

                    <span className="w-px h-5 mx-1" style={{ background: 'var(--card-border)' }} />

                    {SOCIALS.map((social) => (
                        <DockLink key={social.label} label={social.label} href={social.href}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d={social.path} />
                            </svg>
                        </DockLink>
                    ))}

                    <span className="w-px h-5 mx-1" style={{ background: 'var(--card-border)' }} />

                    <DockButton label={isDarkMode ? 'Light mode' : 'Dark mode'} color="var(--accent)" onClick={toggleDarkMode}>
                        {isDarkMode ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4"/>
                                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        )}
                    </DockButton>
                </div>
            </nav>

            {/* Mobile top bar */}
            <nav
                className="fixed top-0 h-16 z-40 w-full backdrop-blur-md border-b flex justify-between items-center px-4 sm:px-8 md:hidden"
                style={{
                    background: 'color-mix(in srgb, var(--bg-primary) 80%, transparent)',
                    borderColor: 'var(--card-border)',
                }}
            >
                <button onClick={() => scrollToSection('home')} className="text-xl font-extrabold gradient-text cursor-pointer flex-shrink-0 mr-4">SR</button>
                <div ref={railRef} className="section-rail text-sm py-2">
                    {MOBILE_SECTIONS.map((section) => (
                        <button
                            key={section}
                            data-section={section}
                            onClick={() => scrollToSection(section)}
                            className="relative px-1 py-2 capitalize cursor-pointer active:scale-95"
                            style={{
                                color: activeSection === section ? 'var(--text-primary)' : 'var(--text-secondary)',
                                fontWeight: activeSection === section ? 600 : 400,
                            }}
                        >
                            {section}
                            <span
                                className="absolute bottom-0 left-0 h-0.5 rounded-full"
                                style={{
                                    background: 'var(--accent)',
                                    width: activeSection === section ? '100%' : '0%',
                                    opacity: activeSection === section ? 1 : 0,
                                }}
                            />
                        </button>
                    ))}
                </div>
            </nav>
        </>
    )
}

function DockShell({ label, color, active, children, ...props }) {
    const [hover, setHover] = useState(false);
    const lit = hover || active;

    return (
        <span className="relative">
            <span
                className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-2 py-1 text-xs font-medium pointer-events-none ${hover ? 'opacity-100 -translate-y-0.5' : 'opacity-0'}`}
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--card-border)' }}
            >
                {label}
            </span>
            {children({ lit, setHover, color, ...props })}
        </span>
    )
}

const dockStyle = (lit, color) => ({
    color: lit ? color : 'var(--text-secondary)',
    background: lit ? `color-mix(in srgb, ${color} 16%, transparent)` : 'transparent',
    boxShadow: lit ? `0 8px 22px -10px ${color}` : 'none',
    transform: lit ? 'translateY(-3px) scale(1.12)' : 'none',
});

function DockButton({ label, color, active, onClick, children }) {
    return (
        <DockShell label={label} color={color} active={active}>
            {({ lit, setHover }) => (
                <button
                    onClick={onClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    aria-label={label}
                    className="dock-item p-2 rounded-xl cursor-pointer block active:scale-90"
                    style={dockStyle(lit, color)}
                >
                    {children}
                </button>
            )}
        </DockShell>
    )
}

function DockLink({ label, color = 'var(--accent)', href, children }) {
    return (
        <DockShell label={label} color={color}>
            {({ lit, setHover }) => (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    aria-label={label}
                    className="dock-item p-2 rounded-xl block active:scale-90"
                    style={dockStyle(lit, color)}
                >
                    {children}
                </a>
            )}
        </DockShell>
    )
}
