import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const soaps = [
    {
        id: 1,
        name: "Citrus Bloom",
        image: "/citrus_bloom.jpg",
        description: "Sun-drenched sweet orange and delicate flower petals. Cold-pressed for stunning natural vibrance."
    },
    {
        id: 2,
        name: "Roasted Mocha",
        image: "/roasted_mocha.jpg",
        description: "Rich, earthy, boldly exfoliating. Infused with fresh roasted espresso beans and dark cacao."
    },
    {
        id: 3,
        name: "Provence Harvest",
        image: "/provence_harvest.jpg",
        description: "Calming wild lavender paired with the gentle, soothing exfoliation of whole organic oats."
    },
    {
        id: 4,
        name: "Midnight Purify",
        image: "/midnight_purify.jpg",
        description: "Deeply purifying black charcoal. Draws out impurities while crisp tea tree invigoratingly cleanses."
    },
    {
        id: 5,
        name: "Golden Nectar",
        image: "/golden_nectar.jpg",
        description: "A rich golden bar delivering intense moisture from raw amber honey and the radiant touch of turmeric."
    },
    {
        id: 6,
        name: "Alpine Frost",
        image: "/alpine_frost.jpg",
        description: "A cooling, marbled masterpiece. Crisp eucalyptus and sharp peppermint open the airways."
    },
    {
        id: 7,
        name: "Verdant Oasis",
        image: "/verdant_oasis.jpg",
        description: "Deep, rich forest green. Ancient healing neem oil combined with ultra-soothing fresh aloe."
    },
    {
        id: 8,
        name: "Rosewood Embers",
        image: "/rosewood_embers.jpg",
        description: "Warm, dusty pink luxury. The grounding essence of raw sandalwood meeting deep crimson rose."
    },
    {
        id: 9,
        name: "Zenith Zest",
        image: "/zenith_zest.jpg",
        description: "Vibrant yellow-green texture. Spicy fresh ginger root warmed by woven, fragrant lemongrass."
    },
    {
        id: 10,
        name: "Matcha Petal",
        image: "/matcha_petal.jpg",
        description: "Elegant pale matcha green. Antioxidant-rich loose leaf tea delicately scented with white jasmine."
    },
    {
        id: 11,
        name: "Velvet Meadow",
        image: "/velvet_meadow.jpg",
        description: "Creamy, highly textured off-white bar. Intensely nourishing goat milk and tiny calming chamomile buds."
    },
    {
        id: 12,
        name: "Tropical Silk",
        image: "/tropical_silk.jpg",
        description: "Bright, speckled pale-orange. A tropical slice of intense hydration and natural papaya enzymes."
    }
];

export default function Collections() {
    return (
        <main className="main-content" style={{ paddingTop: '120px' }}>
            <section className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-label">Mastercrafted</span>
                    <h1 className="title-large" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem' }}>The Collection</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', fontWeight: 300 }}>
                        Our complete 12-piece lineup of uncompromising artisan soaps. Every block is an original masterpiece.
                    </p>
                </div>

                <div className="collection-grid">
                    {soaps.map((soap) => (
                        <div key={soap.id} className="soap-card">
                            <div className="editorial-image-wrapper" style={{ marginBottom: '1.5rem' }}>
                                <div className="editorial-image image-square">
                                    {soap.image ? (
                                        <Image src={soap.image} alt={soap.name} fill style={{ objectFit: 'cover' }} />
                                    ) : (
                                        <div className="soap-placeholder" style={{ fontSize: '1rem' }}>
                                            <span style={{ opacity: 0.5 }}>[LYNS]</span><br /><br />{soap.name}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{soap.name}</h3>
                            <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{soap.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
