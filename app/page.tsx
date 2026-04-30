const units = [
  ["Packages", "Reusable capabilities for larger systems."],
  ["Agents", "Autonomous intelligence that can reason and act."],
  ["Workflows", "Orchestrated logic from intent to execution."],
  ["Connectors", "Bridges between data, tools, and context."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eef1f7] px-6 py-6 text-[#151923] dark:bg-[#0d1117] dark:text-[#e6edf3]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-[28px] bg-[#eef1f7] px-6 py-4 shadow-[10px_10px_24px_#cfd5e2,-10px_-10px_24px_#ffffff] dark:bg-[#161b22] dark:shadow-[10px_10px_24px_#080b10,-10px_-10px_24px_#242b34]">
        <div className="text-xl font-bold tracking-tight">Fractl</div>
        <div className="hidden gap-6 text-sm opacity-70 md:flex">
          <span>System</span><span>Compose</span><span>Ecosystem</span>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 py-24 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] opacity-60">Adaptive Systems Platform</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">Build Living Systems. Not Just Software.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 opacity-70">Fractl is a composable AI platform where intelligence is built as modular units—connected, orchestrated, and continuously evolving.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-2xl bg-[#eef1f7] px-6 py-4 font-semibold shadow-[8px_8px_18px_#cfd5e2,-8px_-8px_18px_#ffffff] dark:bg-[#161b22] dark:shadow-[8px_8px_18px_#080b10,-8px_-8px_18px_#242b34]">Start Building</a>
            <a className="rounded-2xl px-6 py-4 font-semibold opacity-70">Explore the System</a>
          </div>
        </div>

        <div className="rounded-[36px] bg-[#eef1f7] p-8 shadow-[inset_10px_10px_24px_#cfd5e2,inset_-10px_-10px_24px_#ffffff] dark:bg-[#161b22] dark:shadow-[inset_10px_10px_24px_#080b10,inset_-10px_-10px_24px_#242b34]">
          <div className="rounded-[28px] bg-[#eef1f7] p-8 shadow-[10px_10px_24px_#cfd5e2,-10px_-10px_24px_#ffffff] dark:bg-[#161b22] dark:shadow-[10px_10px_24px_#080b10,-10px_-10px_24px_#242b34]">
            <p className="text-sm uppercase tracking-[0.25em] opacity-50">System Core</p>
            <h2 className="mt-8 text-6xl font-black tracking-[-0.08em]">F</h2>
            <p className="mt-8 leading-7 opacity-70">Packages, agents, workflows, and connectors working as one adaptive intelligence layer.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 pb-24 md:grid-cols-4">
        {units.map(([title, body]) => (
          <article key={title} className="rounded-[28px] bg-[#eef1f7] p-6 shadow-[10px_10px_24px_#cfd5e2,-10px_-10px_24px_#ffffff] dark:bg-[#161b22] dark:shadow-[10px_10px_24px_#080b10,-10px_-10px_24px_#242b34]">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-4 text-sm leading-6 opacity-65">{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
