const navItems = ["Platform", "Packages", "Developers", "Ecosystem"];

export default function Home() {
  return (
    <main className="fractl-page">
      <section className="hero-shell">
        <div className="hero-bg" />
        <div className="hero-noise" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="bg-piece piece-one" />
        <div className="bg-piece piece-two" />
        <div className="bg-piece piece-three" />
        <div className="bg-piece piece-four" />

        <div className="glass-panel">
          <div className="glass-shine" />
          <nav className="navbar">
            <div className="brand">
              <span className="brand-icon" />
              <span>Fractl</span>
            </div>
            <div className="nav-links">
              {navItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <button className="nav-button">Get Started</button>
          </nav>

          <div className="hero-content hero-content-centered">
            <div className="hero-copy hero-copy-centered">
              <div className="eyebrow">Adaptive Systems Platform</div>
              <h1>Compose intelligence into living systems</h1>
              <p>
                Build, connect, and monetize modular AI packages that adapt
                together like a living architecture of intelligence.
              </p>
              <div className="actions actions-centered">
                <button>Start Building</button>
                <button>Explore Packages</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
