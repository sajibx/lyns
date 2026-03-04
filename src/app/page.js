import Image from "next/image";

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-bg">
          <Image src="/soap-hero-dark.png" alt="Lyns Handmade European Soap" fill priority style={{ objectFit: 'cover' }} />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <span className="subtitle fade-in">The Art of Bathing</span>
          <h1 className="title-large slide-up">Lyns</h1>
          <p className="hero-description slide-up-delay">
            Hand-poured, cold-processed artisan soaps. A dramatic return to pure, uncompromising European heritage.
          </p>
          <a href="/collections" className="btn-luxury slide-up-delay-2">View the 12-Piece Collection</a>
        </div>
      </section>

      <section id="collections" className="editorial-section">
        <div className="container">
          <div className="editorial-grid">

            <div className="editorial-text">
              <span className="section-label">01 / Vibrant</span>
              <h2>Citrus Bloom</h2>
              <p>A burst of sun-drenched sweet orange balanced by the delicate essence of hand-picked flower petals. Cold-pressed to retain its natural vibrance, this bar invigorates the senses while deeply nourishing the skin.</p>
              <a href="/collections" className="link-arrow">Explore the Collection</a>
            </div>

            <div className="editorial-image-wrapper">
              <div className="editorial-image image-tall">
                <Image src="/citrus_bloom.jpg" alt="Lyns Citrus Bloom Soap" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="editorial-section bg-secondary">
        <div className="container">
          <div className="editorial-grid reverse">

            <div className="editorial-image-wrapper">
              <div className="editorial-image image-wide">
                <Image src="/roasted_mocha.jpg" alt="Lyns Roasted Mocha Soap" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            <div className="editorial-text light-text">
              <span className="section-label">02 / Robust</span>
              <h2>Roasted Mocha</h2>
              <p>Rich, earthy, and boldly exfoliating. Infused with fresh roasted espresso beans and dark cacao. Designed to awaken the skin and deliver a luxurious, grounding aroma that lingers long after you leave the bath.</p>
              <a href="/collections" className="link-arrow light-link">Explore the Collection</a>
            </div>

          </div>
        </div>
      </section>

      <section className="artisanship-manifesto">
        <div className="container manifesto-container">
          <h2>No Compromises.<br />Pure Ingredients.</h2>
          <p>At Lyns, we reject mass production. We offer 12 distinct, masterfully crafted soap variations. Every bar is an original masterpiece, envisioned and built entirely by our master craftsman using centuries-old techniques.</p>
        </div>
      </section>

    </main>
  );
}
