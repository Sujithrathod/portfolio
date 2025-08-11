export default function PageWrapper({ children }) {
    return (
        <div className="mt-16 text-white min-h-[calc(100vh-4rem)] pb-28">
            {children}
            <Footer />
        </div>
    )
}

function Footer() {
    return (
        <footer className="py-8 border-t border-gray-800 mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Sujith. All rights reserved.</p>
            </div>
        </footer>
    )
}