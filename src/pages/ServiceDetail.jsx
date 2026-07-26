import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getServiceBySlug, SERVICES } from "../lib/services-data";
import LeadForm from "../pages/LeadForm";

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Runs on initial mount AND whenever the user clicks a related service (slug changes)
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        // Reset visibility so the fade-in happens again when navigating between services
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, [slug]); // Added slug as a dependency

    if (!service) {
        return (
            <div className="container-page py-24 text-center">
                <h1 className="text-3xl font-bold">Service not found</h1>
                <Link to="/services" className="mt-6 inline-flex text-brand font-semibold">
                    Browse all services
                </Link>
            </div>
        );
    }

    const related = SERVICES.filter(
        (s) => s.category === service.category && s.slug !== service.slug,
    ).slice(0, 3);

    return (
        <div className={`transition-opacity duration-700 ease-out pb-20 lg:pb-0 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Hero Banner - Adjusted padding for mobile/desktop parity */}
            <section className="gradient-hero pt-16 lg:pt-28 pb-16 lg:pb-20 border-b border-border">
                <div className="container-page max-w-4xl">
                    <nav className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
                        <Link to="/" className="hover:text-brand">Home</Link>
                        <span>/</span>
                        <Link to="/services" className="hover:text-brand">Services</Link>
                        <span>/</span>
                        <span className="text-foreground">{service.title}</span>
                    </nav>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                        {service.categoryLabel}
                    </p>
                    <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        {service.title}
                    </h1>
                    <p className="mt-5 text-xl text-brand font-medium">{service.tagline}</p>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        {service.intro}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#lead-form"
                            className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-elegant"
                        >
                            Request Consultation <ArrowRight className="h-4 w-4" />
                        </a>
                        <Link
                            to="/services"
                            className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:border-brand hover:text-brand transition"
                        >
                            All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sub-Services Grid */}
            <section className="py-20">
                <div className="container-page">
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">What we offer</p>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Specialized capabilities</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {service.subServices.map((sub, i) => (
                            <div
                                key={sub.title}
                                className="rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-card transition"
                            >
                                <span className="text-xs font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                                <h3 className="mt-2 text-lg font-bold">{sub.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{sub.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tags */}
            <section className="py-16 bg-surface border-y border-border">
                <div className="container-page max-w-4xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                        {service.tagsLabel}
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Breadth of expertise</h2>
                    <div className="mt-8 flex flex-wrap gap-2 justify-center">
                        {service.tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-brand hover:text-brand transition"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="container-page">
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Why choose us</p>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
                            Outcomes you can count on
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                        {service.benefits.map((b) => (
                            <div key={b} className="flex gap-3 items-start py-2">
                                <CheckCircle2 className="h-6 w-6 shrink-0 text-brand" />
                                <p className="text-base text-foreground">{b}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Capture */}
            <section id="lead-form" className="py-20 bg-surface border-t border-border">
                <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                            Start a conversation
                        </p>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
                            Tell us about your {service.title.toLowerCase()} needs
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            A solutions specialist will reach out within one business day with a tailored proposal
                            and next steps.
                        </p>
                        {related.length > 0 && (
                            <div className="mt-10">
                                <p className="text-sm font-bold text-foreground mb-3">Related services</p>
                                <div className="flex flex-wrap gap-2">
                                    {related.map((r) => (
                                        <Link
                                            key={r.slug}
                                            to={`/services/${r.slug}`}
                                            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand transition"
                                        >
                                            {r.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                        <LeadForm defaultService={service.slug} />
                    </div>
                </div>
            </section>
        </div>
    );
}