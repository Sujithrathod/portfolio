import { useEffect, useState } from "react"

export default function Nav() {
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Default to dark on mount
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        setIsDarkMode(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'education', 'skills', 'projects'];
            const scrollPosition = window.scrollY + 100;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleDarkMode = () => {
        const next = !document.documentElement.classList.contains('dark');
        if (next) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
        setIsDarkMode(next);
    };

    return (
        <>
            <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-black/95 backdrop-blur-lg border border-gray-700/40 rounded-full px-3 py-2 flex items-center space-x-3 shadow-xl shadow-black/20">
                    <button
                        onClick={() => scrollToSection('home')}
                        className={`p-2 rounded-lg transition-all duration-300 ease-out transform hover:scale-[1.15] hover:-translate-y-0.5 bg-black text-white hover:bg-gray-900 hover:shadow-lg hover:shadow-black/30`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                    </button>

                    <a
                        href="https://github.com/Sujithrathod"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 transition-all duration-300 ease-out transform hover:scale-[1.15] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sujith-rathod/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 transition-all duration-300 ease-out transform hover:scale-[1.15] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>

                    <a
                        href="https://x.com/sujithrathod20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 transition-all duration-300 ease-out transform hover:scale-[1.15] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>

                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 transition-all duration-300 ease-out transform hover:scale-[1.15] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
                    >
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"/>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <nav className="fixed top-0 h-16 z-40 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 text-white flex justify-between items-center px-4 sm:px-8 lg:px-16 md:hidden">
                <div className="flex items-center">
                    <button onClick={() => scrollToSection('home')} className="text-xl font-bold hover:text-gray-300 transition-colors cursor-pointer">SR</button>
                </div>
                <div className="flex space-x-6">
                    <button onClick={() => scrollToSection('about')} className={`relative py-1 ${activeSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors cursor-pointer`}>About{activeSection === 'about' && (<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>)}</button>
                    <button onClick={() => scrollToSection('education')} className={`relative py-1 ${activeSection === 'education' ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors cursor-pointer`}>Education{activeSection === 'education' && (<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>)}</button>
                    <button onClick={() => scrollToSection('skills')} className={`relative py-1 ${activeSection === 'skills' ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors cursor-pointer`}>Skills{activeSection === 'skills' && (<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>)}</button>
                    <button onClick={() => scrollToSection('projects')} className={`relative py-1 ${activeSection === 'projects' ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors cursor-pointer`}>Projects{activeSection === 'projects' && (<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>)}</button>
                </div>
            </nav>
        </>
    )
}