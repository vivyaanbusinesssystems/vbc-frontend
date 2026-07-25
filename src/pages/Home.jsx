import { Link } from "react-router-dom";
import {
    ArrowRight,
    Users,
    Cpu,
    Cog,
    ShieldCheck,
    Clock,
    Award,
    HeadphonesIcon,
    Globe2,
    Sparkles,
    Star,
    Quote,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { INDUSTRIES, SERVICES } from "../lib/services-data";
import heroImg from "../assets/hero.jpg";

export default function Home() {
    return (
        <>
            <Hero />
            <CompanyIntro />
            <CoreServices />
            <WhyChooseUs />
            <IndustriesMarquee />
            <Highlights />
            <Testimonials />
            <PreFooterCTA />
        </>
    );
}

function Hero() {
    return (
        <section className="relative gradient-hero overflow-hidden">
            <div className="container-page grid lg:grid-cols-2 gap-12 py-20 lg:py-28 items-center">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs font-semibold text-brand">
                        <Sparkles className="h-3.5 w-3.5" /> Enterprise Solutions Partner
                    </span>
                    <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
                        Talent, technology &amp; operations — <span className="text-brand">delivered as one</span>.
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
                        Vivyaan Business Systems is the trusted B2B partner enterprises rely on to hire
                        skilled manpower, launch complex IT solutions, and run modern back-office
                        operations at scale.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/services/contract-staffing"
                            className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-elegant hover:opacity-95 transition"
                        >
                            Hire Talent <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/services/custom-software"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-brand hover:text-brand transition"
                        >
                            Start a Tech Project <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                        {[
                            { k: "500+", v: "Enterprise clients" },
                            { k: "10K+", v: "Talent bench" },
                            { k: "15+", v: "Years delivering" },
                        ].map((s) => (
                            <div key={s.v}>
                                <dt className="text-2xl font-bold text-brand">{s.k}</dt>
                                <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 gradient-brand opacity-10 blur-3xl rounded-[3rem]" />
                    <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant bg-primary">
                        <img
                            src={heroImg}
                            alt="Vivyaan enterprise partnership across staffing and technology"
                            width={1400}
                            height={1100}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background border border-border shadow-card p-4 hidden sm:flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-highlight/20 text-highlight-foreground">
                            <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">ISO 27001 &amp; SOC 2</p>
                            <p className="text-sm font-semibold">Certified Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CompanyIntro() {
    return (
        <section className="py-20">
            <div className="container-page max-w-4xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Who We Are</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                    A single partner for the people, platforms, and processes that run your business.
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    For over a decade, Vivyaan Business Systems has served as the bridge between growing
                    enterprises and the specialized capability they need. We combine deep staffing networks,
                    seasoned technology teams, and mature operations practices to help our clients hire faster,
                    ship better software, and run leaner operations — all under one accountable partnership.
                </p>
            </div>
        </section>
    );
}

function CoreServices() {
    const pillars = [
        {
            key: "workforce",
            title: "Workforce & Staffing",
            icon: Users,
            copy: "Contract, permanent, and payroll solutions to build your dream team quickly and compliantly.",
        },
        {
            key: "technology",
            title: "Technology Solutions",
            icon: Cpu,
            copy: "Custom software, mobile apps, cloud engineering, and AI — engineered for scale.",
        },
        {
            key: "operations",
            title: "Digital & Operations",
            icon: Cog,
            copy: "Digital marketing, BPO, and corporate training to run and grow your business better.",
        },
    ];
    return (
        <section className="py-20 bg-surface">
            <div className="container-page">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div className="max-w-xl">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                            Core Services
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                            Three pillars. One accountable partner.
                        </h2>
                    </div>
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand transition"
                    >
                        View All Services <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {pillars.map((p) => {
                        const Icon = p.icon;
                        return (
                            <div
                                key={p.key}
                                className="group rounded-3xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 hover:border-brand/40 transition-all"
                            >
                                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-brand-foreground shadow-elegant">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.copy}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {SERVICES.filter((s) => s.category === p.key)
                                        .slice(0, 3)
                                        .map((s) => (
                                            <Link
                                                key={s.slug}
                                                to={`/services/${s.slug}`}
                                                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground hover:bg-brand-soft hover:text-brand transition"
                                            >
                                                {s.title}
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function WhyChooseUs() {
    const items = [
        { icon: Award, title: "15+ years experience", copy: "Proven track record with Fortune 500 clients." },
        { icon: Clock, title: "Rapid delivery", copy: "Roles filled in 7 days, PoCs in 2 weeks." },
        { icon: ShieldCheck, title: "Compliance-first", copy: "ISO 27001, SOC 2, and statutory-ready." },
        { icon: Users, title: "10,000+ vetted talent", copy: "Deep bench across tech and business roles." },
        { icon: Globe2, title: "Multi-geo delivery", copy: "Presence across India, GCC, and North America." },
        { icon: HeadphonesIcon, title: "24x7 support", copy: "Named account manager for every engagement." },
    ];
    return (
        <section className="py-20">
            <div className="container-page">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Why Vivyaan</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                        Built around outcomes, not just deliverables.
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((i) => {
                        const Icon = i.icon;
                        return (
                            <div
                                key={i.title}
                                className="flex gap-4 rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-card transition"
                            >
                                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand shrink-0">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-foreground">{i.title}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{i.copy}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function IndustriesMarquee() {
    const list = [...INDUSTRIES, ...INDUSTRIES];
    return (
        <section className="py-16 border-y border-border bg-surface overflow-hidden">
            <div className="container-page mb-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Industries Served</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Trusted across sectors</h2>
            </div>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-surface to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-surface to-transparent z-10" />
                <div className="flex gap-4 animate-marquee w-max">
                    {list.map((ind, i) => (
                        <span
                            key={`${ind}-${i}`}
                            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground/80 whitespace-nowrap"
                        >
                            {ind}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CountUp({ end, suffix = "" }) {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting && !started.current) {
                    started.current = true;
                    const dur = 1600;
                    const start = performance.now();
                    const tick = (now) => {
                        const p = Math.min(1, (now - start) / dur);
                        const eased = 1 - Math.pow(1 - p, 3);
                        setVal(Math.floor(eased * end));
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            });
        }, { threshold: 0.4 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [end]);
    return (
        <span ref={ref} className="tabular-nums">
            {val.toLocaleString()}
            {suffix}
        </span>
    );
}

function Highlights() {
    const stats = [
        { end: 500, suffix: "+", label: "Enterprise clients served" },
        { end: 10000, suffix: "+", label: "Vetted professionals" },
        { end: 25, suffix: "+", label: "Countries delivered in" },
        { end: 98, suffix: "%", label: "Client retention rate" },
    ];
    return (
        <section className="py-20 gradient-brand text-brand-foreground">
            <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((s) => (
                    <div key={s.label}>
                        <p className="text-4xl sm:text-5xl font-extrabold text-highlight">
                            <CountUp end={s.end} suffix={s.suffix} />
                        </p>
                        <p className="mt-2 text-sm text-brand-foreground/80">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Testimonials() {
    const items = [
        {
            quote:
                "Vivyaan scaled our engineering org by 40 people in under two months. Quality of talent was consistently high.",
            name: "Priya Nair",
            title: "VP Engineering, FinEdge",
        },
        {
            quote:
                "Their cloud migration team delivered on time and cut our AWS bill by a third. A rare true partner.",
            name: "Rahul Menon",
            title: "CIO, Aurorix Retail",
        },
        {
            quote:
                "From payroll to BPO, we consolidated four vendors into Vivyaan. Operations have never been smoother.",
            name: "Sarah Thompson",
            title: "COO, Meridian Health",
        },
    ];
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000);
        return () => clearInterval(t);
    }, [items.length]);
    return (
        <section className="py-20">
            <div className="container-page max-w-4xl">
                <div className="text-center mb-10">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Testimonials</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What our clients say</h2>
                </div>
                <div className="relative rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-card">
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-brand-soft" />
                    <div className="min-h-45 flex flex-col justify-center">
                        <p className="text-lg sm:text-xl leading-relaxed text-foreground italic">
                            "{items[idx].quote}"
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="grid h-11 w-11 place-items-center rounded-full gradient-brand text-brand-foreground font-bold">
                                {items[idx].name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-foreground">{items[idx].name}</p>
                                <p className="text-xs text-muted-foreground">{items[idx].title}</p>
                            </div>
                            <div className="ml-auto flex text-highlight">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center gap-2">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Testimonial ${i + 1}`}
                                onClick={() => setIdx(i)}
                                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-brand" : "w-2 bg-border"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PreFooterCTA() {
    return (
        <section className="py-20">
            <div className="container-page">
                <div className="relative overflow-hidden rounded-3xl gradient-brand px-8 py-14 sm:px-14 sm:py-20 text-center">
                    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-highlight/30 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                    <div className="relative">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-foreground max-w-3xl mx-auto">
                            Ready to scale your team, tech, or operations?
                        </h2>
                        <p className="mt-4 text-brand-foreground/80 max-w-2xl mx-auto text-lg">
                            Book a free consultation with our solutions team and we'll build a plan tailored
                            to your goals — no strings attached.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-highlight text-highlight-foreground px-8 py-4 text-base font-bold shadow-2xl hover:scale-[1.02] transition"
                        >
                            Get in Touch <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}