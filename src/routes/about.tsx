
import { createFileRoute } from "@tanstack/react-router";
import engine from "@/assets/engine.jpg";
import { CallBand, PageHero, Reveal } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tha's Auto Repair" },
      {
        name: "description",
        content:
          "Meet Tha's Auto Repair: a local shop built on honesty, skill and care.",
      },
      { property: "og:title", content: "About — Tha's Auto Repair" },
      {
        property: "og:description",
        content: "A local shop built on honesty, skill and care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  [
    "Honesty",
    "Clear explanations and upfront quotes. You approve every job.",
  ],
  [
    "Craft",
    "Experienced technicians who take pride in doing it right.",
  ],
  [
    "Care",
    "We treat every car — and every customer — like family.",
  ],
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Local shop.
            <br />
            <span className="text-ember">Serious skill.</span>
          </>
        }
        sub="Tha's Auto Repair keeps our neighbors on the road with dependable service and real expertise."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        {values.map(([t, d], i) => (
          <Reveal
            key={t}
            delay={i * 120}
            className="rounded-2xl border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-ember"
          >
            <p className="font-display text-6xl font-black text-ember">
              0{i + 1}
            </p>
            <h2 className="mt-6 text-4xl font-black">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl items-center gap-8 px-6 md:grid-cols-2">
        <Reveal className="overflow-hidden rounded-3xl">
          <img
            src="/shop-front.jpg"
            alt="Tha's Auto Repair shop exterior"
            loading="lazy"
            className="h-[420px] w-full rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>

        <Reveal delay={120} className="overflow-hidden rounded-3xl">
          <img
            src={engine}
            alt="Technician working on a car engine"
            loading="lazy"
            className="h-[420px] w-full rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Visit our shop
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Local service.
            <br />
            <span className="text-ember">Personal care.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            From routine maintenance to complex repairs, our goal is to help
            you understand your vehicle's needs and get back on the road with
            confidence.
          </p>
        </Reveal>
      </section>

      <CallBand />
    </>
  );
}
