const navItems = ["Platform", "Packages", "Developers", "Ecosystem"];
const modules = [
  ["Agent", "Autonomous task unit"],
  ["Flow", "Composable workflow"],
  ["Data", "Living connector"],
  ["Logic", "Adaptive package"],
];

export default function Home() {
  return (
    <main className="fractl-page">
      <section className="hero-shell">
        <div className="hero-bg" />
        <div className="hero-noise" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />

        <div className="glass-panel">
          <div className="glass-shine" />
          <nav className="navbar">
            <div className="brand"><span className="brand-icon" /><span>Fractl</span></div>
            <div className="nav-links">{navItems.map((item) => <span key={item}>{item}</span>)}</div>
            <button className="nav-button">Get Started</button>
          </nav>

          <div className="hero-content">
            <div className="hero-copy">
              <div className="eyebrow">Adaptive Systems Platform</div>
              <h1>Compose intelligence into living systems</h1>
              <p>Build, connect, and monetize modular AI packages that adapt together like a living architecture of intelligence.</p>
              <div className="actions"><button>Start Building</button><button>Explore Packages</button></div>
            </div>

            <div className="visual-stage">
              <div className="visual-board" />
              <div className="visual-diamond" />
              <div className="modulo-core"><span /><span /></div>
              {modules.map(([label, detail], index) => (
                <div className={`module-card module-${index}`} key={label}>
                  <i />
                  <strong>{label}</strong>
                  <small>{detail}</small>
                </div>
              ))}
              <div className="soft-shadow" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
