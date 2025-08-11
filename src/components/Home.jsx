import PageWrapper from "./PageWrapper"

export default function Home() {
    return (
        <PageWrapper>
            <main className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto pb-40">
                <HeroSection />
                <AboutSection />
                <EducationSection />
                <SkillsSection />
                <ProjectsSection />
            </main>
        </PageWrapper>
    )
}

function HeroSection() {
    return (
        <section id="home" className="flex flex-col items-center pt-32 pb-16 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Hi, I'm Sujith Rathod
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Building clean, scalable web apps using Typescript, React, and Next — focused on real-world problem solving.
            </p>
        </section>
    )
}

function AboutSection() {
    return (
        <section id="about" className="py-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">About</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm passionate about building interactive, scalable digital experiences using tools like React and Node.js. With a curiosity-driven, hands-on mindset, I love turning ideas into functional products. I'm also exploring emerging technologies like AI, machine learning, and deep learning.
            </p>
        </section>
    )
}

function EducationSection() {
    return (
        <section id="education" className="py-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Education</h2>
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 dark:bg-gray-700 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    U
                </div>
                <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">M S Ramaiah University of Applied Sciences</h3>
                    <p className="text-gray-500 dark:text-gray-400">Sept 2022 - May 2026</p>
                    <p className="text-gray-600 dark:text-gray-300">B.Tech in AI/ML</p>
                </div>
            </div>
        </section>
    )
}

function SkillsSection() {
    const skills = [
        "React", "Next.js", "docker", "Typescript", "Python", "Node.js", "Postgres", "MongoDB",
        "Websockets", "Express", "devops", "Machine Learning", "Deep Learning", "Javascript"
    ];

    return (
        <section id="skills" className="py-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-black shadow-sm border border-gray-200 dark:bg-white dark:text-black dark:border-gray-200 transition-transform duration-200 ease-out hover:scale-105 hover:shadow-md"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}

function ProjectsSection() {
    const projects = [
        {
            title: "TypeDrop",
            description: "A simple web app for fast, hassle‑free file sharing. Clean UI, works across devices, and boosts team collaboration.",
            link: "https://github.com/Sujithrathod/TypeDrop",
            tech: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            title: "Recipe Maker",
            description: "Recipe Finder using RAG for accurate recipes. Improved matching by ~40% with better keyword extraction and a tidy data model.",
            link: "https://github.com/Sujithrathod/Precision_baking",
            tech: ["Python", "AI/ML", "RAG", "Database"]
        },
        {
            title: "Hotel Management System",
            description: "Hotel management platform with React and Node/Express. Migrated to MySQL and optimized queries for ~40% faster reads; responsive and secure.",
            link: "https://github.com/Sujithrathod/hotel-management-mysql",
            tech: ["React", "Node.js", "MySQL", "Express"]
        }
    ];

    return (
        <section id="projects" className="py-16">
            <div className="text-center mb-12">
                <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded text-sm font-medium mb-6 transition-transform duration-200 ease-out hover:scale-105">
                    My Projects
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Check out my latest work</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </p>
            </div>
            
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-transparent shadow-lg shadow-black/30 transition-transform transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-black/50 group-hover:scale-[1.03] shadow-[0_0_0_1px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_0_1px_rgba(0,0,0,0.16),0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_25px_50px_-12px_rgba(0,0,0,0.6)] cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{project.title}</h3>
                                <span className="text-blue-600 dark:text-blue-400 opacity-80 group-hover:opacity-100 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-black shadow-sm border border-gray-200 dark:bg-white dark:text-black dark:border-gray-200 transition-transform duration-200 ease-out group-hover:scale-105 group-hover:shadow-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}