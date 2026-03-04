import Link from "next/link";

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>LYNS</h3>
                    <p>Uncompromising luxury. 12 distinct, masterfully handcrafted soap variations, cold-processed to perfection.</p>
                </div>

                <div className="footer-links-wrapper">
                    <div className="footer-links">
                        <h4>Collections</h4>
                        <ul>
                            <li><Link href="/collections">View All 12 Variants</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Heritage</h4>
                        <ul>
                            <li><Link href="/#manifesto">The Lyns Manifesto</Link></li>
                            <li><Link href="#contact">Contact the Artisan</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Lyns. All rights reserved.</p>
            </div>
        </footer>
    );
}
