export default function PageWrapper({ children }) {
    return (
        <div className="relative z-10 mt-16 min-h-[calc(100vh-4rem)] pb-28">
            {children}
            <Footer />
        </div>
    )
}

function Footer() {
    return (
        <footer className="relative py-10 mt-16">
            <div
                className="h-px w-full mb-8"
                style={{ background: 'linear-gradient(90deg, transparent, var(--border-color), transparent)' }}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                <p>
                    Built with{" "}
                    <span style={{ color: 'var(--text-primary)' }}>React</span> &{" "}
                    <span style={{ color: 'var(--text-primary)' }}>Tailwind</span>.
                </p>
            </div>
        </footer>
    )
}
