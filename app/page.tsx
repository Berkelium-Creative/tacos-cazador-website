"use client";
import { Monoton, Space_Grotesk, Space_Mono } from "next/font/google";
import content from "../data/content.json";

const display = Monoton({ subsets: ["latin"], weight: ["400"], variable: "--font-display" });
const body = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-body" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

const VOID = "#0A0A0A";
const SLATE = "#1C1917";
const LIME = "#BEF264";
const SODIUM = "#FB923C";
const BONE = "#FAFAFA";
const MUTED = "#A8A29E";

const HERO_PHOTO = "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=1800&q=80&auto=format&fit=crop";
const SHOP_PHOTO = "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen`} style={{ backgroundColor: VOID, color: BONE, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow-lime { 0%, 100% { text-shadow: 0 0 24px ${LIME}88, 0 0 48px ${LIME}55; } 50% { text-shadow: 0 0 32px ${LIME}AA, 0 0 64px ${LIME}77; } }
        @keyframes flicker { 0%, 100% { opacity: 1; } 92%, 94% { opacity: 0.6; } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }
        .display-text { font-family: var(--font-display); }
        .mono-text { font-family: var(--font-mono); }
        .neon-glow { animation: glow-lime 3s ease-in-out infinite; }
        .neon-sodium { text-shadow: 0 0 24px ${SODIUM}77, 0 0 48px ${SODIUM}44; }
        .flicker { animation: flicker 6s infinite; }
        .neon-border { box-shadow: 0 0 0 1px ${LIME}, 0 0 24px ${LIME}44, inset 0 0 24px ${LIME}22; }
        .neon-border-sodium { box-shadow: 0 0 0 1px ${SODIUM}, 0 0 24px ${SODIUM}44; }
      `}</style>

      <header className="border-b" style={{ borderColor: SLATE, backgroundColor: VOID }}>
        <div className="text-center py-2.5 mono-text text-[10px] uppercase tracking-[0.4em]" style={{ backgroundColor: SLATE, color: LIME }}>
          ↘ ABIERTO VIERNES · SÁBADO · DOMINGO · 5:30 PM — 12 AM ↙
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="display-text text-3xl flicker" style={{ color: LIME }}>CAZADOR</div>
            <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: SODIUM }}>/ NIGHT TAQUERIA</div>
          </div>
          <div className="hidden md:flex items-center gap-8 mono-text text-xs uppercase tracking-widest">
            <a href="#about" style={{ color: BONE }}>[ stand ]</a>
            <a href="#menu" style={{ color: BONE }}>[ menu ]</a>
            <a href="#reviews" style={{ color: BONE }}>[ reviews ]</a>
            <a href="#visit" style={{ color: BONE }}>[ visit ]</a>
          </div>
          <a href={c.hero.ctaLink} className="display-text px-5 py-2.5 text-base neon-border" style={{ color: LIME }}>ORDER ↘</a>
        </nav>
      </header>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 50%, ${LIME}11, transparent 60%), radial-gradient(ellipse at 80% 70%, ${SODIUM}15, transparent 55%), linear-gradient(180deg, ${VOID}00 0%, ${VOID}DD 70%, ${VOID} 100%)` }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="fade-up max-w-5xl">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-8 inline-flex items-center gap-3" style={{ color: SODIUM }}>
              <span className="inline-block w-12 h-px" style={{ backgroundColor: SODIUM }}></span>
              {c.hero.eyebrow}
            </div>
            <h1 className="display-text text-7xl md:text-[10rem] leading-[0.9] mb-8 neon-glow" style={{ color: LIME }}>
              {c.hero.heading.toUpperCase()}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10" style={{ color: BONE }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={c.hero.ctaLink} className="display-text px-10 py-5 text-2xl inline-flex items-center gap-3 neon-border" style={{ color: LIME }}>
                {c.hero.ctaText.toUpperCase()} ↘
              </a>
              <div className="mono-text text-xs uppercase tracking-widest" style={{ color: MUTED }}>
                <div>★ 4.8 / 17 RESEÑAS</div>
                <div className="mt-1">/ 2923 CAZADOR STREET</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-y" style={{ borderColor: SLATE, backgroundColor: VOID }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="overflow-hidden neon-border-sodium" style={{ aspectRatio: "4/5" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${SHOP_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(20%) brightness(0.85)" }} />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3" style={{ color: LIME }}>/ {c.about.label}</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95] mb-8 neon-sodium" style={{ color: SODIUM }}>{c.about.heading.toUpperCase()}</h2>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: BONE }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 border-b" style={{ borderColor: SLATE, backgroundColor: SLATE }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: SODIUM }}>/ EL MENÚ</div>
              <h2 className="display-text text-5xl md:text-7xl leading-[0.95] neon-glow" style={{ color: LIME }}>NIGHT FOOD.</h2>
            </div>
            <div className="mono-text text-xs uppercase tracking-widest" style={{ color: SODIUM }}>/ PRECIOS FIRMES · CASH OR CARD</div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.services.map((s: any, i: number) => (
              <article key={i} className="p-7" style={{ backgroundColor: VOID, border: `1px solid ${SLATE}` }}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="mono-text text-[10px] uppercase tracking-widest mb-2" style={{ color: LIME }}>/ № {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="display-text text-3xl leading-tight" style={{ color: BONE }}>{s.title.toUpperCase()}</h3>
                  </div>
                  <div className="display-text text-3xl whitespace-nowrap" style={{ color: SODIUM }}>{s.price}</div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b" style={{ borderColor: SLATE, backgroundColor: VOID }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: SODIUM }}>/ LATE-NIGHT GUEST BOOK</div>
          <h2 className="display-text text-5xl md:text-6xl leading-[1.0] mb-14 neon-glow" style={{ color: LIME }}>WHAT THE NIGHT SAYS.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-7 flex flex-col h-full neon-border">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: SODIUM, fontSize: 20 }}>★</span>)}
                  </div>
                  <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: LIME }}>/ 0{i + 1}</div>
                </div>
                <blockquote className="text-base leading-relaxed mb-6 flex-grow" style={{ color: BONE }}>"{r.text}"</blockquote>
                <figcaption className="pt-4" style={{ borderTop: `1px solid ${SLATE}` }}>
                  <div className="display-text text-xl" style={{ color: LIME }}>{r.name.toUpperCase()}</div>
                  <div className="mono-text text-[10px] uppercase tracking-widest mt-1" style={{ color: SODIUM }}>/ {r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: VOID }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-4" style={{ color: LIME }}>/ COORDINATES</div>
            <h2 className="display-text text-6xl md:text-8xl leading-[0.9] mb-8 neon-sodium" style={{ color: SODIUM }}>FIND US.</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: BONE }}>The walk-up at the end of Cazador Street. Open Friday, Saturday, and Sunday from five-thirty in the afternoon until midnight. Late-night line forms by ten.</p>

            <dl className="space-y-5 mb-10">
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: SODIUM }}>/ ADDRESS</dt>
                <dd className="text-xl font-semibold" style={{ color: BONE }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: SODIUM }}>/ LLAMAR</dt>
                <dd className="display-text text-4xl neon-glow"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: LIME }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-2" style={{ color: SODIUM }}>/ HORAS</dt>
                <dd>
                  <table className="text-sm mono-text uppercase" style={{ color: BONE }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1 font-bold" style={{ color: LIME }}>{day}</td>
                          <td>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden neon-border" style={{ minHeight: 420 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0, filter: "grayscale(70%) invert(82%) hue-rotate(180deg)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t" style={{ borderColor: SLATE, backgroundColor: VOID, color: MUTED }}>
        <div className="display-text text-4xl mb-2 neon-glow" style={{ color: LIME }}>TACOS CAZADOR</div>
        <div className="mono-text text-xs uppercase tracking-[0.4em]" style={{ color: SODIUM }}>/ NIGHT TAQUERIA · LOS ANGELES</div>
        <div className="mono-text text-xs uppercase tracking-[0.35em] mt-4 opacity-60">© {new Date().getFullYear()} · TACOS CAZADOR · ALL NIGHTS RESERVED</div>
      </footer>
    </main>
  );
}
