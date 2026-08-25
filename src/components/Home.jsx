import { useEffect, useRef, useState } from "react"
import PageWrapper from "./PageWrapper"
import useReveal from "../hooks/useReveal"
import useCoarsePointer from "../hooks/useCoarsePointer"
import profileImage from "../assets/profile.png"

const ROLES = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Agentic AI Developer",
    "Full Stack Developer",
];

export default function Home() {
    const ref = useReveal();

    return (
        <PageWrapper>
            <div
                ref={ref}
                className="relative z-10 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto lg:flex lg:gap-16 lg:items-start"
            >
                {/* Left rail: identity. Sticks while the right column scrolls past it. */}
                <IntroRail />

                {/* Right column: the actual content */}
                <div className="lg:w-[56%] lg:py-24 pb-40">
                    <AboutSection />
                    <ExperienceSection />
                    <EducationSection />
                    <ProjectsSection />
                    <SkillsSection />
                </div>
            </div>
        </PageWrapper>
    )
}

/* Cycles through ROLES one character at a time. */
function useTypewriter(words, typeMs = 70, deleteMs = 35, holdMs = 1600) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        if (!deleting && text === word) {
            const t = setTimeout(() => setDeleting(true), holdMs);
            return () => clearTimeout(t);
        }
        if (deleting && text === "") {
            setDeleting(false);
            setIndex((i) => i + 1);
            return;
        }
        const t = setTimeout(() => {
            setText((current) =>
                deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1)
            );
        }, deleting ? deleteMs : typeMs);
        return () => clearTimeout(t);
    }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

    return text;
}

function IntroRail() {
    const typed = useTypewriter(ROLES);

    return (
        <header
            id="home"
            className="lg:w-[44%] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center pt-24 lg:pt-0 pb-12 lg:pb-0 text-center lg:text-left"
        >
            <div className="reveal flex flex-col items-center lg:items-start">
                <div className="relative float">
                    <div className="avatar-glow" />
                    <div className="avatar-ring w-36 h-36 lg:w-44 lg:h-44">
                        <img
                            src={profileImage}
                            alt="Sujith Rathod"
                            width="176"
                            height="176"
                            className="w-full h-full rounded-full object-cover"
                            style={{ background: 'var(--bg-secondary)' }}
                        />
                    </div>
                </div>

                <h1 className="mt-7 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
                    Sujith <span className="gradient-text">Rathod</span>
                </h1>

                <p className="mt-3 text-lg sm:text-xl font-semibold h-8">
                    <span className="caret" style={{ color: 'var(--text-primary)' }}>{typed}</span>
                </p>

                <p className="mt-5 max-w-md leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Building clean, scalable web apps using Typescript, React, and Next — focused on real-world problem solving.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium border"
                    style={{ borderColor: 'var(--card-border)', background: 'var(--card-bg)' }}
                >
                    <span className="status-dot" />
                    <span style={{ color: 'var(--text-secondary)' }}>Open to opportunities</span>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-primary cursor-pointer"
                    >
                        View my work
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                    <a href="https://github.com/Sujithrathod" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </div>

                <a
                    href="https://github.com/Sujithrathod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-sm font-medium hover:opacity-70"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    @Sujithrathod
                </a>
            </div>
        </header>
    )
}

function AboutSection() {
    return (
        <section id="about" className="reveal py-14 first:pt-0">
            <span className="eyebrow">01 — About</span>
            <h2 className="text-3xl font-bold mt-3 mb-6">What I do</h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I work where <Accent>machine learning</Accent> meets{" "}
                <Accent>software development</Accent> — lately on{" "}
                <Accent>agentic AI</Accent>: systems that reason, use tools, and finish the job.
                I build with <Accent>React.js</Accent> and <Accent>Node.js</Accent>,
                and I'd rather prototype an idea than theorize about it.
            </p>
        </section>
    )
}

function Accent({ children }) {
    return (
        <span
            className="font-semibold underline decoration-1 underline-offset-4"
            style={{ color: 'var(--text-primary)', textDecorationColor: 'var(--accent-faint)' }}
        >
            {children}
        </span>
    )
}

const EXPERIENCE = [
    {
        role: "Data Analytics and AI Intern",
        company: "Mindsprint",
        period: "Jan 2026 - Present",
        points: [
            "Worked on cash forecasting, turning historical financial data into forward looking projections and tightening the accuracy of those forecasts.",
            "Built an agent in Snowflake that generates reports on demand, connecting directly to Snowflake database table schemas so it can answer questions straight from the source data.",
        ],
    },
];

function ExperienceSection() {
    return (
        <section id="experience" className="reveal py-14 first:pt-0">
            <span className="eyebrow">02 — Experience</span>
            <h2 className="text-3xl font-bold mt-3 mb-6">Where I've worked</h2>

            <div className="space-y-6">
                {EXPERIENCE.map((job) => (
                    <div key={job.company} className="card">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <h3 className="text-lg font-semibold">
                                {job.role} ·{" "}
                                <span style={{ color: 'var(--text-secondary)' }}>{job.company}</span>
                            </h3>
                            <span
                                className="text-xs font-semibold rounded-full px-3 py-1 whitespace-nowrap"
                                style={{ background: 'var(--accent-faint)', color: 'var(--text-primary)' }}
                            >
                                {job.period}
                            </span>
                        </div>

                        <ul className="mt-4 space-y-3">
                            {job.points.map((point) => (
                                <li key={point} className="flex gap-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    <span
                                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ background: 'var(--text-primary)' }}
                                    />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

function EducationSection() {
    return (
        <section id="education" className="reveal py-14 first:pt-0">
            <span className="eyebrow">03 — Education</span>
            <h2 className="text-3xl font-bold mt-3 mb-6">Where I studied</h2>
            <div className="card flex items-start gap-4">
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
                    style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
                >
                    U
                </div>
                <div className="min-w-0">
                    <h3 className="text-lg font-semibold">M S Ramaiah University of Applied Sciences</h3>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Sept 2022 - Aug 2026</p>
                    <p style={{ color: 'var(--text-secondary)' }}>B.Tech in AI/ML</p>
                    <span
                        className="inline-block mt-3 text-xs font-semibold rounded-full px-3 py-1"
                        style={{ background: 'var(--accent-faint)', color: 'var(--text-primary)' }}
                    >
                        9.1 / 10 CGPA
                    </span>
                </div>
            </div>
        </section>
    )
}

const SKILLS = [
    "React", "Next.js", "Typescript", "Javascript", "Node.js", "Express",
    "Python", "Postgres", "MongoDB", "Websockets", "docker", "devops",
    "Machine Learning", "Deep Learning",
];

function SkillsSection() {
    return (
        <section id="skills" className="reveal py-14 first:pt-0">
            <span className="eyebrow">05 — Skills</span>
            <h2 className="text-3xl font-bold mt-3 mb-6">Tools I reach for</h2>
            <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                ))}
            </div>
        </section>
    )
}

const PROJECTS = [
    {
        title: "Vyaap",
        tagline: "AI-powered entity extraction and invoicing for WhatsApp SMBs",
        link: "https://github.com/Sujithrathod/Vyaap",
        points: [
            "Built for small and medium businesses that run their sales over WhatsApp. An AI pipeline reads ordinary customer chat messages, extracts the order details buried in them, and turns those into invoices with no manual data entry.",
            "Built the browser extension itself: a Manifest V3 side panel and content script that sit alongside WhatsApp Web, with a React interface that reviews the extracted order and generates the invoice PDF on the spot.",
        ],
        tech: [
            "Chrome Extension (MV3)", "JavaScript", "React", "Vite", "jsPDF",
            "Go", "PostgreSQL", "Redis", "JWT",
            "Python", "FastAPI", "LangChain", "Gemini", "FAISS", "Docker",
        ],
    },
    {
        title: "Image-Drop",
        tagline: "Share images and files with nothing but a name you pick",
        link: "https://github.com/Sujithrathod/Image-Drop",
        demo: "https://img-drop.vercel.app",
        points: [
            "Instant and completely anonymous, with no account, no sign-up and no login. You upload under a secret key of your own choosing, and anyone who knows that key can pull the drop back down.",
            "Handles images and files, not just pictures. PDFs included, up to five per drop, stored on Cloudinary and retrieved by the key alone.",
        ],
        tech: [
            "JavaScript", "React", "Vite", "Axios",
            "Node.js", "Express", "Multer", "Cloudinary",
            "Vercel", "Render",
        ],
    },
    {
        title: "RAG Research Assistant",
        tagline: "Ask questions across a stack of research papers and get cited answers",
        link: "https://github.com/Sujithrathod/Rag-Research-Assistant",
        demo: "https://rag-research-assistants.streamlit.app/",
        points: [
            "Upload several papers at once and question them in plain language. A retrieval augmented pipeline grounds every answer in the source text and hands back page level citations, so nothing it tells you is unverifiable.",
            "Runs entirely on free infrastructure. Embeddings are generated locally with a lightweight MiniLM model, the vector store lives in memory per session so a user's papers are wiped when they leave, and inference goes through Groq's LPU for fast responses.",
        ],
        tech: [
            "Python", "Streamlit", "LangChain", "Groq",
            "Llama 3", "ChromaDB", "HuggingFace", "Sentence-Transformers", "PyPDF",
        ],
    },
    {
        title: "Telco Customer Churn Prediction",
        tagline: "Spot the customers about to leave, before they do",
        link: "https://github.com/Sujithrathod/Telco-Customer-Churn-Prediction",
        demo: "https://telco-customer-churn-predictor-web.streamlit.app",
        points: [
            "Scores each telecom customer for churn risk and suggests a retention action, so support teams know who to call first.",
            "A soft voting ensemble of Random Forest, Logistic Regression and XGBoost, trained on SMOTE balanced data and served through both a web app and a REST API.",
        ],
        tech: [
            "Python", "scikit-learn", "XGBoost", "SMOTE",
            "pandas", "NumPy", "FastAPI", "Streamlit", "Docker",
        ],
    },
];

function ProjectsSection() {
    return (
        <section id="projects" className="reveal py-14 first:pt-0">
            <div className="mb-8">
                <span className="eyebrow">04 — Projects</span>
                <h2 className="text-3xl font-bold mt-3 mb-4">
                    Check out my <span className="gradient-text">latest work</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>
A flagship I built end to end, and a small tool that does one thing with no friction.
                </p>
            </div>

            <div className="space-y-6">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    )
}

function ProjectCard({ project }) {
    const cardRef = useRef(null);
    const coarse = useCoarsePointer();

    const pointFrom = (clientX, clientY) => {
        const el = cardRef.current;
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        el.style.setProperty('--cx', `${x}px`);
        el.style.setProperty('--cy', `${y}px`);
        return { el, rect, x, y };
    };

    const handleMove = (e) => {
        if (coarse) return;
        const hit = pointFrom(e.clientX, e.clientY);
        if (!hit) return;
        const { el, rect, x, y } = hit;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = (0.5 - (y / rect.height)) * 8;
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    // Touch gets the glow tracking the finger, without the tilt (which fights scrolling).
    const handleTouch = (e) => {
        const touch = e.touches[0];
        if (touch) pointFrom(touch.clientX, touch.clientY);
    };

    const handleLeave = () => {
        const el = cardRef.current;
        if (el) el.style.transform = '';
    };

    return (
        <div className="group">
            <div
                ref={cardRef}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onTouchStart={handleTouch}
                onTouchMove={handleTouch}
                className="card"
            >
                <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label={`Open the ${project.title} live demo`}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Live
                            </a>
                        )}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label={`View the ${project.title} source on GitHub`}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Code
                        </a>
                    </div>
                </div>

                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{project.tagline}</p>

                <ul className="space-y-3 mb-6">
                    {project.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            <span
                                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: 'var(--text-primary)' }}
                            />
                            {point}
                        </li>
                    ))}
                </ul>

                <p className="eyebrow mb-3">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
