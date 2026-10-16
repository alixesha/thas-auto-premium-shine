
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import engine from "@/assets/engine.jpg";
import { CallBand, PHONE, Reveal, TEL } from "@/components/site";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tha's Auto Repair — Expert Car Repair & Service" },
      {
        name: "description",
        content:
          "Trusted auto repair, diagnostics, brakes and maintenance. Call Tha's Auto Repair at (408) 738-2633.",
      },
      {
        property: "og:title",
        content: "Tha's Auto Repair — Expert Car Repair & Service",
      },
      {
        property: "og:description",
        content:
          "Trusted auto repair, diagnostics, brakes and maintenance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  ["All", "Makes & Models"],
  ["Honest", "Upfront Pricing"],
  ["Fast", "Turnaround"],
  ["Local", "Family Owned"],
];

function Index() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          src="https://thas-auto-premium-shine.lovable.app/__l5e/assets-v1/3d059fd9-2e0a-41b1-a369-d02e2bdabc33/hero-video.mp4"
          poster={hero}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Mechanic working under a car on a lift"
          className="animate-kenburns absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-fade absolute inset-0" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pb-12 pt-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="animate-rise text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Precision Auto Care
            </p>

            <h1
              className="animate-rise mt-5 max-w-3xl text-7xl font-black md:text-[9rem]"
              style={{ animationDelay: "150ms" }}
            >
              Driven by <span className="text-ember">trust.</span>
            </h1>

            <p
              className="animate-rise mt-6 max-w-md text-lg text-muted-foreground"
              style={{ animationDelay: "300ms" }}
            >
              Expert repairs, honest advice and craftsmanship your car deserves.
            </p>

            <div
              className="animate-rise mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "450ms" }}
            >
              <a href={TEL} className="btn-ember">
                <Phone size={18} /> Call {PHONE}
              </a>

              <Link to="/services" className="btn-ghost">
                Our Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* ORIGINAL SHOP PHOTO IN HERO */}
          <Reveal delay={200} className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <img
              src="/shop-front.jpg"
              alt="Tha's Auto Repair original shop"
              className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
            />
            <div className="border-t border-white/10 bg-background/90 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Visit Our Shop
              </p>
              <p className="mt-2 text-muted-foreground">
                Professional automotive care you can trust.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-card py-5">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-3xl uppercase text-muted-foreground">
          {[...services, ...services].map((s, i) => (
            <span key={i}>
              {s.title} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
            What we do
          </p>
          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Complete care,
            <br />
            under one roof.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="group bg-background p-8 transition-colors duration-500 hover:bg-card"
            >
              <s.icon
                className="text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                size={32}
              />
              <h3 className="mt-6 text-3xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT / WHY THA'S - KEEP BOTH PHOTOS */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 md:grid-cols-2">
        <div className="grid gap-5">
          <Reveal className="overflow-hidden rounded-3xl">
            <img
              src={engine}
              alt="Mechanic working on an engine"
              loading="lazy"
              className="h-[270px] w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
            />
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-3xl">
            <img
              src="/shop-front.jpg"
              alt="Tha's Auto Repair original shop exterior"
              loading="lazy"
              className="h-[270px] w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
            />
          </Reveal>
        </div>

        <Reveal delay={150}>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Why Tha's
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">
            No surprises.
            <br />
            Just solid work.
          </h2>

          <p className="mt-6 text-muted-foreground">
            We explain what your car needs, why it needs it, and what it costs
            — before we start. Quality parts, careful hands, and a shop that
            treats your car like our own.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map(([a, b]) => (
              <div key={b} className="border-l-2 border-primary pl-4">
                <p className="font-display text-4xl font-black uppercase">
                  {a}
                </p>
                <p className="text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <span className="ml-3 text-sm text-muted-foreground">
              Loved by local drivers
            </span>
          </div>
        </Reveal>
      </section>

      <CallBand />
    </>
  );
              }
                  
