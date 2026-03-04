"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="main-nav">
            <div className="container nav-container">
                <Link href="/" className="logo" onClick={closeMenu}>
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
                    <button className="btn-icon mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            {isMobileMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <ul className="mobile-nav-links">
                        <li><Link href="/collections" onClick={closeMenu}>Collections</Link></li>
                        <li><Link href="/#manifesto" onClick={closeMenu}>Manifesto</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
