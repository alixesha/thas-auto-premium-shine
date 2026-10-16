import { createFileRoute } from "@tanstack/react-router";
import { CallBand, PageHero, Reveal } from "@/components/site";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tha's Auto Repair" },
      { name: "description", content: "Diagnostics, engine, brakes, transmission, A/C, electrical and maintenance at Tha's Auto Repair." },
      { property: "og:title", content: "Services — Tha's Auto Repair" },
      { property: "og:description", content: "Full-service auto repair for all makes and models." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Everything your<br /><span className="text-ember">car needs.</span></>} sub="From quick oil changes to complex diagnostics — handled with precision." />
      <section className="mx-auto max-w-7xl px-6">
        {services.map((s, i) => (
          <Reveal key={s.title} className="group flex items-center gap-8 border-t border-border py-10 transition-all duration-500 hover:pl-4">
            <span className="font-display text-xl text-muted-foreground">0{i + 1}</span>
            <s.icon className="shrink-0 text-primary" size={36} />
            <div className="flex-1 md:flex md:items-center md:justify-between md:gap-10">
              <h2 className="text-4xl font-black transition-colors group-hover:text-primary md:text-5xl">{s.title}</h2>
              <p className="mt-2 max-w-md text-muted-foreground md:mt-0">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <CallBand />
    </>
  );
}
