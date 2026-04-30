const modules = ["Agent", "Package", "Flow", "Data"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#c9dbe6] px-6 py-10 text-[#17191d]">
      <section className="relative mx-auto min-h-[82vh] max-w-6xl overflow-hidden rounded-[22px] bg-[#f4f4f2] px-8 py-7 shadow-[0_35px_90px_rgba(30,45,60,.24)] md:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,.96),rgba(238,238,235,.86))]" />
        <div className="absolute left-[30%] -top-28 h-[760px] w-[70px] rotate-[28deg] bg-black/[.055] blur-[2px]" />
        <div className="absolute right-[28%] -top-24 h-[760px] w-[130px] rotate-[28deg] bg-white/40 blur-[6px]" />

        <nav className="relative z-10 flex items-center justify-between">
          <div className="text-sm font-black tracking-[.08em]">FRACTL</div>
          <div className="hidden gap-9 text-xs font-semibold text-black/45 md:flex"><span>System</span><span>Packages</span><span>Agents</span><span>Pricing</span></div>
          <button className="rounded-[10px] bg-[#17191d] px-5 py-3 text-xs font-bold text-white">SIGN IN</button>
        </nav>

        <div className="relative z-10 grid min-h-[66vh] items-center gap-8 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.28em] text-black/30">Compose every system</p>
            <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-[-.055em] md:text-6xl">Build Living Systems, Not Just Software</h1>
            <p className="mt-6 max-w-md text-sm leading-6 text-black/48">Compose packages, agents, workflows, and connectors into adaptive intelligence that moves with your business.</p>
            <div className="mt-8 flex gap-4"><button className="rounded-[9px] bg-[#17191d] px-6 py-3 text-xs font-black text-white">START BUILDING</button><button className="rounded-[9px] border border-black/10 bg-white/35 px-6 py-3 text-xs font-black backdrop-blur-md">EXPLORE</button></div>
          </div>

          <div className="relative flex min-h-[470px] items-center justify-center">
            <div className="absolute h-[300px] w-[300px] rounded-[26px] bg-[#e9e9e6] shadow-[22px_22px_45px_rgba(90,96,105,.24),-18px_-18px_42px_rgba(255,255,255,.9)]" />
            <div className="absolute h-[220px] w-[220px] rotate-45 rounded-[22px] border border-white/60 bg-white/18 shadow-[0_28px_80px_rgba(50,80,110,.18)] backdrop-blur-xl" />
            <div className="relative grid grid-cols-2 gap-5">
              {modules.map((item) => <div key={item} className="flex h-28 w-28 items-center justify-center rounded-[18px] bg-[#efefec] text-xs font-black text-black/55 shadow-[14px_14px_28px_rgba(126,132,140,.28),-12px_-12px_28px_rgba(255,255,255,.92)]">{item}</div>)}
            </div>
            <div className="absolute bottom-16 h-7 w-72 rounded-full bg-black/10 blur-xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
