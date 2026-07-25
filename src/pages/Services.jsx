import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, SERVICES } from "../lib/services-data";

export default function Services() {
    const cats = Object.keys(CATEGORIES);

    return (
        <>
            <section className="gradient-hero py-20">
                <div className="container-page max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Our Services</p>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">
                        Full-spectrum solutions across people, platforms, and process.
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Ten specialized service lines, organized around three pillars — delivered by a single
                        accountable partner.
                    </p>
                </div>
            </section>

            {cats.map((cat) => {
                const meta = CATEGORIES[cat];
                const items = SERVICES.filter((s) => s.category === cat);
                return (
                    <section key={cat} className="py-16 border-t border-border first:border-none">
                        <div className="container-page">
                            <div className="mb-8 max-w-2xl">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                                    {meta.label}
                                </p>
                                <h2 className="mt-2 text-3xl font-bold">{meta.description}</h2>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((s) => (
                                    <Link
                                        key={s.slug}
                                        to={`/services/${s.slug}`}
                                        className="group rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-elegant hover:-translate-y-1 transition-all"
                                    >
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                                            {s.categoryLabel}
                                        </p>
                                        <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                                            Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
}