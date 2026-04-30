const units = [
  ["Packages", "Reusable capabilities for larger systems."],
  ["Agents", "Autonomous intelligence that can reason and act."],
  ["Workflows", "Orchestrated logic from intent to execution."],
  ["Connectors", "Bridges between data, tools, and context."],
];

const chips = ["Logic", "Signal", "Memory", "Action"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e9edf5] px-6 py-6 text-[#151923] dark:bg-[#0b0f17] dark:text-[#e6edf3]">
      <div className="pointer-events-none absolute left-10 top-32 h-28 w-28 rounded-[18px] bg-[#e9edf5] shadow-[14px_14px_28px_#c4cad8,-14px_-14px_28px_#ffffff] dark:bg-[#151b24] dark:shadow-[14px_14px_28px_#05070b,-14px_-14px_28px_#222b37]" />
      <div className="pointer-events-none absolute right-16 top-28 h-40 w-40 rounded-[20px] border border-white/45 bg-white/25 shadow-[0_24px_80px_rgba(90,120,180,.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[.07]" />
      <div className="pointer-events-none absolute bottom-24 left-1/4 h-32 w-72 rounded-[22px] border border-white/40 bg-white/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/[.05]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(91,141,239,.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(126,87,255,.14),transparent_28%)]" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between rounded-[18px] bg-[#e9edf5] px-6 py-4 shadow-[12px_12px_24px_#c4cad8,-12px_-12px_24px_#ffffff] dark:bg-[#151b24] dark:shadow-[12px_12px_24px_#05070b,-12px_-12px_24px_#222b37]">
        <div className="text-xl font-black tracking-tight">Fractl</div>
        <div className="hidden gap-6 text-sm opacity-70 md:flex">
          <span>System</span><span>Compose</span><span>Ecosystem</span>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-10 py-24 md:grid-cols-[1.05fr_.95fr] md:items-center">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] opacity-60">Adaptive Systems Platform</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[.95] tracking-[-0.055em] md:text-7xl">Build Living Systems. Not Just Software.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 opacity-70">Fractl is a composable AI platform where intelligence is built as modular units—connected, orchestrated, and continuously evolving.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-[14px] bg-[#e9edf5] px-6 py-4 font-bold shadow-[9px_9px_18px_#c4cad8,-9px_-9px_18px_#ffffff] dark:bg-[#151b24] dark:shadow-[9px_9px_18px_#05070b,-9px_-9px_18px_#222b37]">Start Building</a>
            <a className="rounded-[14px] border border-white/40 bg-white/25 px-6 py-4 font-bold backdrop-blur-xl dark:border-white/10 dark:bg-white/[.06]">Explore System</a>
          </div>
        </div>

        <div className="relative rounded-[22px] bg-[#e9edf5] p-7 shadow-[inset_12px_12px_24px_#c4cad8,inset_-12px_-12px_24px_#ffffff] dark:bg-[#151b24] dark:shadow-[inset_12px_12px_24px_#05070b,inset_-12px_-12px_24px_#222b37]">
          <div className="absolute -right-5 top-8 rounded-[16px] border border-white/45 bg-white/30 px-5 py-3 text-sm font-bold shadow-[0_18px_60px_rgba(50,70,120,.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[.08]">AI Layer</div>
          <div className="rounded-[18px] bg-[#e9edf5] p-8 shadow-[14px_14px_28px_#c4cad8,-14px_-14px_28px_#ffffff] dark:bg-[#151b24] dark:shadow-[14px_14px_28px_#05070b,-14px_-14px_28px_#222b37]">
            <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-50">System Core</p>
            <h2 className="mt-8 text-7xl font-black tracking-[-0.1em]">F</h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {chips.map((chip) => <span key={chip} className="rounded-[12px] border border-white/50 bg-white/25 px-4 py-3 text-sm font-bold backdrop-blur-xl dark:border-white/10 dark:bg-white/[.06]">{chip}</span>)}
            </div>
            <p className="mt-8 leading-7 opacity-70">Packages, agents, workflows, and connectors working as one adaptive intelligence layer.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-5 pb-24 md:grid-cols-4">
        {units.map(([title, body]) => (
          <article key={title} className="rounded-[18px] bg-[#e9edf5] p-6 shadow-[12px_12px_24px_#c4cad8,-12px_-12px_24px_#ffffff] dark:bg-[#151b24] dark:shadow-[12px_12px_24px_#05070b,-12px_-12px_24px_#222b37]">
            <div className="mb-7 h-10 w-10 rounded-[10px] border border-white/40 bg-white/25 backdrop-blur-xl dark:border-white/10 dark:bg-white/[.06]" />
            <h3 className="text-xl font-black">{title}</h3>
            <p className="mt-4 text-sm leading-6 opacity-65">{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
