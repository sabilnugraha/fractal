const navItems = ["Platform", "Packages", "Developers", "Ecosystem"];
const modules = [
  { label: "Agent", detail: "Autonomous task unit", pos: "left-[8%] top-[22%]" },
  { label: "Flow", detail: "Composable workflow", pos: "right-[6%] top-[28%]" },
  { label: "Data", detail: "Living connector", pos: "left-[15%] bottom-[16%]" },
  { label: "Logic", detail: "Adaptive package", pos: "right-[17%] bottom-[14%]" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#ededed] px-4 py-5 text-[#11111b] sm:px-8 sm:py-8">
      <section className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center justify-center overflow-hidden rounded-[34px] border border-white/70 bg-[#ededed] shadow-[0_34px_120px_rgba(15,23,42,0.16)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(116,139,255,0.24),transparent_30%),radial-gradient(circle_at_84%_24%,rgba(57,213,255,0.20),transparent_28%),radial-gradient(circle_at_54%_88%,rgba(183,139,255,0.17),transparent_34%),linear-gradient(135deg,#ededed_0%,#f8f8f8_45%,#e3e6ee_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(17,17,27,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,27,0.22)_1px,transparent_1px)] [background-size:68px_68px]" />
        <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-white/55 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[660px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[2px]" />
        <div className="absolute left-[11%] top-[16%] h-28 w-28 rounded-[32px] border border-white/55 bg-white/20 blur-[1px]" />
        <div className="absolute right-[13%] top-[13%] h-40 w-40 rotate-12 rounded-[36px] border border-white/55 bg-white/20 blur-[1px]" />
        <div className="absolute bottom-[12%] left-[18%] h-36 w-36 -rotate-12 rounded-[34px] border border-white/50 bg-white/15 blur-[1px]" />

        <div className="relative z-10 w-[min(1120px,92vw)] rounded-[36px] border border-white/60 bg-[#ededed]/45 px-6 py-6 shadow-[0_42px_130px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.78),inset_0_-1px_0_rgba(255,255,255,0.30)] backdrop-blur-[34px] backdrop-saturate-150 sm:px-10 sm:py-8 lg:px-14">
          <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(255,255,255,0.08)_44%,rgba(255,255,255,0.28))]" />

          <nav className="relative z-10 flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/70 bg-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_36px_rgba(15,23,42,0.08)]">
                <div className="h-4 w-4 rotate-45 rounded-[5px] border border-[#11111b]/35 bg-white/30" />
              </div>
              <span className="text-base font-black tracking-[-0.04em]">Fractl</span>
            </div>

            <div className="hidden items-center gap-9 text-xs font-semibold text-[#11111b]/50 md:flex">
              {navItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <button className="rounded-full bg-[#11111b] px-5 py-3 text-xs font-bold text-white shadow-[0_18px_44px_rgba(17,17,27,0.24)]">
              Get Started
            </button>
          </nav>

          <div className="relative z-10 grid min-h-[620px] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/28 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#11111b]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl">
                Adaptive Systems Platform
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[0.96] tracking-[-0.075em] text-[#11111b] sm:text-6xl lg:text-7xl">
                Compose intelligence into living systems
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#11111b]/55">
                Build, connect, and monetize modular AI packages that adapt together like a living architecture of intelligence.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#11111b] px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_22px_55px_rgba(17,17,27,0.24)]">
                  Start Building
                </button>
                <button className="rounded-full border border-white/65 bg-white/25 px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#11111b]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_42px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                  Explore Packages
                </button>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-2xl" />
              <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[58px] border border-white/60 bg-[#ededed]/35 shadow-[30px_30px_90px_rgba(125,132,145,0.22),-28px_-28px_80px_rgba(255,255,255,0.76),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-2xl" />
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[46px] border border-white/70 bg-white/24 shadow-[0_36px_90px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.84)] backdrop-blur-xl" />

              <div className="absolute left-1/2 top-1/2 grid h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[46px] border border-white/70 bg-[#ededed]/78 shadow-[18px_18px_46px_rgba(120,126,136,0.22),-16px_-16px_42px_rgba(255,255,255,0.85),inset_0_1px_0_rgba(255,255,255,0.95)]">
                <div className="relative h-32 w-32 rounded-[36px] border border-[#11111b]/5 bg-[linear-gradient(145deg,#ffffff,#dedede)] shadow-[inset_10px_10px_18px_rgba(120,126,136,0.16),inset_-10px_-10px_18px_rgba(255,255,255,0.95)]">
                  <div className="absolute left-[38px] top-[56px] h-4 w-4 rounded-full bg-[#9aa8ff] shadow-[0_0_22px_rgba(154,168,255,0.78)]" />
                  <div className="absolute right-[38px] top-[56px] h-4 w-4 rounded-full bg-[#9aa8ff] shadow-[0_0_22px_rgba(154,168,255,0.78)]" />
                </div>
              </div>

              {modules.map((item) => (
                <div
                  key={item.label}
                  className={`absolute ${item.pos} hidden w-36 rounded-[24px] border border-white/70 bg-[#ededed]/52 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-[24px] md:block`}
                >
                  <div className="mb-4 h-10 w-10 rounded-2xl border border-white/70 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" />
                  <p className="text-sm font-black tracking-[-0.03em]">{item.label}</p>
                  <p className="mt-1 text-[11px] leading-4 text-[#11111b]/42">{item.detail}</p>
                </div>
              ))}

              <div className="absolute bottom-8 left-1/2 h-10 w-[360px] -translate-x-1/2 rounded-full bg-[#11111b]/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
