const navItems = ["Platform", "Packages", "Developers", "Ecosystem"];
const modules = [
  { label: "Agent", detail: "Autonomous task unit", pos: "left-[2%] top-[20%]" },
  { label: "Flow", detail: "Composable workflow", pos: "right-[1%] top-[30%]" },
  { label: "Data", detail: "Living connector", pos: "left-[12%] bottom-[14%]" },
  { label: "Logic", detail: "Adaptive package", pos: "right-[15%] bottom-[10%]" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ededed] px-4 py-5 text-[#11111b] sm:px-8 sm:py-8">
      <section className="relative mx-auto min-h-[calc(100vh-64px)] max-w-7xl overflow-hidden rounded-[34px] border border-white/70 bg-[#ededed] shadow-[0_34px_120px_rgba(15,23,42,0.14)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(116,139,255,0.18),transparent_31%),radial-gradient(circle_at_86%_22%,rgba(57,213,255,0.17),transparent_29%),radial-gradient(circle_at_54%_88%,rgba(183,139,255,0.12),transparent_35%),linear-gradient(135deg,#ededed_0%,#fbfbfb_45%,#e5eaf0_100%)]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(17,17,27,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,27,0.25)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-white/55 blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-cyan-200/24 blur-3xl" />
        <div className="absolute left-[44%] top-[16%] h-72 w-72 rounded-full bg-white/35 blur-3xl" />

        <div className="relative z-10 mx-auto my-8 w-[min(1180px,92vw)] overflow-hidden rounded-[36px] border border-white/65 bg-[#ededed]/46 px-6 py-6 shadow-[0_38px_120px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.82),inset_0_-1px_0_rgba(255,255,255,0.28)] backdrop-blur-[34px] backdrop-saturate-150 sm:px-10 sm:py-8 lg:px-14">
          <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,255,255,0.10)_46%,rgba(255,255,255,0.26))]" />

          <nav className="relative z-20 flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/75 bg-white/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_36px_rgba(15,23,42,0.08)]">
                <div className="h-4 w-4 rotate-45 rounded-[5px] border border-[#11111b]/35 bg-white/30" />
              </div>
              <span className="text-base font-black tracking-[-0.04em]">Fractl</span>
            </div>

            <div className="hidden items-center gap-9 text-sm font-semibold text-[#11111b]/48 md:flex">
              {navItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <button className="rounded-full bg-[#11111b] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(17,17,27,0.22)]">
              Get Started
            </button>
          </nav>

          <div className="relative z-10 grid min-h-[560px] items-center gap-8 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-6">
            <div className="relative z-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/65 bg-white/30 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#11111b]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">
                Adaptive Systems Platform
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[0.96] tracking-[-0.075em] text-[#11111b] sm:text-6xl lg:text-7xl">
                Compose intelligence into living systems
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#11111b]/55">
                Build, connect, and monetize modular AI packages that adapt together like a living architecture of intelligence.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#11111b] px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_22px_55px_rgba(17,17,27,0.22)]">
                  Start Building
                </button>
                <button className="rounded-full border border-white/70 bg-white/28 px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#11111b]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_18px_42px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                  Explore Packages
                </button>
              </div>
            </div>

            <div className="relative min-h-[470px] overflow-hidden rounded-[34px] lg:overflow-visible">
              <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-[68px] border border-white/55 bg-[#ededed]/28 shadow-[26px_26px_80px_rgba(125,132,145,0.17),-24px_-24px_70px_rgba(255,255,255,0.62),inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-2xl" />
              <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[50px] border border-white/70 bg-white/22 shadow-[0_32px_84px_rgba(15,23,42,0.09),inset_0_1px_0_rgba(255,255,255,0.84)] backdrop-blur-xl" />

              <div className="absolute left-1/2 top-1/2 grid h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[42px] border border-white/75 bg-[#ededed]/82 shadow-[16px_16px_42px_rgba(120,126,136,0.18),-15px_-15px_38px_rgba(255,255,255,0.78),inset_0_1px_0_rgba(255,255,255,0.95)]">
                <div className="relative h-28 w-28 rounded-[32px] border border-[#11111b]/5 bg-[linear-gradient(145deg,#ffffff,#dfdfdf)] shadow-[inset_9px_9px_16px_rgba(120,126,136,0.15),inset_-9px_-9px_16px_rgba(255,255,255,0.95)]">
                  <div className="absolute left-[33px] top-[49px] h-4 w-4 rounded-full bg-[#9aa8ff] shadow-[0_0_22px_rgba(154,168,255,0.74)]" />
                  <div className="absolute right-[33px] top-[49px] h-4 w-4 rounded-full bg-[#9aa8ff] shadow-[0_0_22px_rgba(154,168,255,0.74)]" />
                </div>
              </div>

              {modules.map((item) => (
                <div
                  key={item.label}
                  className={`absolute ${item.pos} hidden w-36 rounded-[24px] border border-white/75 bg-[#ededed]/56 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.09),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-[24px] md:block`}
                >
                  <div className="mb-4 h-10 w-10 rounded-2xl border border-white/75 bg-white/46 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" />
                  <p className="text-sm font-black tracking-[-0.03em]">{item.label}</p>
                  <p className="mt-1 text-[11px] leading-4 text-[#11111b]/42">{item.detail}</p>
                </div>
              ))}

              <div className="absolute bottom-8 left-1/2 h-10 w-[320px] -translate-x-1/2 rounded-full bg-[#11111b]/9 blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
