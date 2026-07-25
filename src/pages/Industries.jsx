import { Link } from "react-router-dom";
import { Building2, Briefcase, HeartPulse, ShoppingBag, Factory, Truck, Radio, Zap, GraduationCap, HardHat, Landmark, Plane } from "lucide-react";
import { INDUSTRIES } from "../lib/services-data";

const ICONS = [Landmark, Briefcase, HeartPulse, ShoppingBag, Factory, Truck, Radio, Zap, GraduationCap, HardHat, Building2, Plane];

export default function Industries() {
    return (
        <>
            <section className="gradient-hero py-20">
                <div className="container-page max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Industries</p>
                    <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Domain expertise across every sector we serve.
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Our teams bring lived experience of the regulations, workflows, and technology stacks
                        unique to each industry.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {INDUSTRIES.map((ind, i) => {
                        const Icon = ICONS[i % ICONS.length];
                        return (
                            <div
                                key={ind}
                                className="group rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-elegant hover:-translate-y-1 transition-all"
                            >
                                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-brand-foreground">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-lg font-bold">{ind}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Purpose-built talent and technology programs for {ind.toLowerCase()} organizations.
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="py-16">
                <div className="container-page">
                    <div className="rounded-3xl gradient-brand text-brand-foreground p-10 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold">Don't see your industry?</h2>
                        <p className="mt-3 text-brand-foreground/80 max-w-xl mx-auto">
                            We've likely worked in your space — let's have a conversation.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center rounded-full bg-highlight text-highlight-foreground px-6 py-3 font-bold"
                        >
                            Talk to us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}