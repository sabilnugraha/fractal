const navItems = ["Platform", "Packages", "Developers", "Ecosystem"];

const nodes = [
  { label: "Agent", detail: "Autonomous unit", className: "node-top-left" },
  { label: "Flow", detail: "Composable workflow", className: "node-top-right" },
  { label: "Data", detail: "Living connector", className: "node-bottom-left" },
  { label: "Logic", detail: "Adaptive package", className: "node-bottom-right" },
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

          <div className="hero-content">
            <div className="hero-copy">
              <div className="eyebrow">Adaptive Systems Platform</div>
              <h1>Compose intelligence into living systems</h1>
              <p>
                Build, connect, and monetize modular AI packages that adapt
                together like a living architecture of intelligence.
              </p>
              <div className="actions">
                <button>Start Building</button>
                <button>Explore Packages</button>
              </div>
            </div>

            <div className="visual-stage network-stage" aria-hidden="true">
              <div className="network-glow" />
              <div className="network-ring ring-1" />
              <div className="network-ring ring-2" />

              <div className="network-line line-1" />
              <div className="network-line line-2" />
              <div className="network-line line-3" />
              <div className="network-line line-4" />

              <div className="network-core">
                <div className="network-core-inner">
                  <span className="core-dot dot-left" />
                  <span className="core-dot dot-right" />
                </div>
              </div>

              {nodes.map((node) => (
                <div className={`network-node ${node.className}`} key={node.label}>
                  <div className="node-badge" />
                  <strong>{node.label}</strong>
                  <small>{node.detail}</small>
                </div>
              ))}

              <div className="network-pulse pulse-1" />
              <div className="network-pulse pulse-2" />
              <div className="soft-shadow" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
