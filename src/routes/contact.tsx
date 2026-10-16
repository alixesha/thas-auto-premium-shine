import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Phone } from "lucide-react";
import { FB, PageHero, PHONE, Reveal, TEL } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tha's Auto Repair" },
      { name: "description", content: "Call Tha's Auto Repair at (408) 738-2633 to book your service." },
      { property: "og:title", content: "Contact — Tha's Auto Repair" },
      { property: "og:description", content: "Call (408) 738-2633 to book your service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's get you<br /><span className="text-ember">back on the road.</span></>} sub="Give us a call to book an appointment or ask a question." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-28 md:grid-cols-2">
        <Reveal>
          <a href={TEL} className="group block rounded-3xl bg-ember p-12 text-primary-foreground transition-transform duration-500 hover:-translate-y-2">
            <Phone size={36} />
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.3em]">Call us</p>
            <p className="mt-2 font-display text-5xl font-black md:text-6xl">{PHONE}</p>
          </a>
        </Reveal>
        <Reveal delay={120}>
          <a href={FB} target="_blank" rel="noreferrer" className="block h-full rounded-3xl border border-border bg-card p-12 transition-all duration-500 hover:-translate-y-2 hover:border-primary">
            <Facebook size={36} className="text-primary" />
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">Follow along</p>
            <p className="mt-2 font-display text-5xl font-black uppercase md:text-6xl">Facebook</p>
          </a>
        </Reveal>
      </section>
    </>
  );
}
