import Image from "next/image";
import fractAgent from "../assets/fract2.png";

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

            <div className="visual-stage asset-stage" aria-hidden="true">
              <div className="asset-glow asset-glow-a" />
              <div className="asset-glow asset-glow-b" />
              <div className="asset-orbit orbit-one" />
              <div className="asset-orbit orbit-two" />

              <div className="agent-asset-wrap">
                <Image
                  src={fractAgent}
                  alt=""
                  className="agent-asset"
                  priority
                />
              </div>

              <div className="asset-chip chip-agent">Agent</div>
              <div className="asset-chip chip-package">Package</div>
              <div className="asset-chip chip-flow">Flow</div>
              <div className="asset-shadow" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
