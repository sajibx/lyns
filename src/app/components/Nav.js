import Link from "next/link";

export default function Nav() {
    return (
        <nav className="main-nav">
            <div className="container nav-container">
                <Link href="/" className="logo">
                    LYNS
                </Link>
                <div className="nav-center">
                    <ul className="nav-links">
                        <li><Link href="/collections">Collections</Link></li>
                        <li><Link href="/#manifesto">Manifesto</Link></li>
                    </ul>
                </div>
                <div className="nav-actions">
                    <button className="btn-icon" aria-label="Cart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
