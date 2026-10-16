import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Phone, Menu, X } from "lucide-react";

export const PHONE = "(408) 738-2633";
export const TEL = "tel:+14087382633";
export const FB = "https://www.facebook.com/ThasAutoRepair/";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f(); window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border py-3" : "py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-2xl font-black uppercase tracking-wide">
          Tha's <span className="text-ember">Auto</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
          <a href={TEL} className="btn-ember !py-2.5 text-sm"><Phone size={16} />{PHONE}</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 md:hidden">
          {links.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-display text-2xl uppercase">{l.label}</Link>)}
          <a href={TEL} className="btn-ember justify-center"><Phone size={16} />{PHONE}</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-black uppercase">Tha's <span className="text-ember">Auto Repair</span></p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">Honest, expert care for every make and model.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {links.map((l) => <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-primary">{l.label}</Link>)}
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href={TEL} className="font-display text-2xl text-primary">{PHONE}</a>
          <a href={FB} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">Follow us on Facebook</a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Tha's Auto Repair</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub: string }) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-40">
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="animate-rise text-sm font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h1 className="animate-rise mt-4 text-6xl font-black md:text-8xl" style={{ animationDelay: "120ms" }}>{title}</h1>
        <p className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "240ms" }}>{sub}</p>
      </div>
    </section>
  );
}

export function CallBand() {
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ember p-12 text-primary-foreground md:p-20">
        <h2 className="text-5xl font-black md:text-7xl">Car trouble?<br />Let's fix it today.</h2>
        <a href={TEL} className="mt-8 inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 font-bold text-foreground transition-transform hover:scale-105">
          <Phone size={18} /> Call {PHONE}
        </a>
      </Reveal>
    </section>
  );
}
