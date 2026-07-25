import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Globe2 } from "lucide-react";

export default function About() {
    const values = [
        { icon: Target, title: "Outcome-Driven", copy: "We measure success by the results we deliver, not hours logged." },
        { icon: Heart, title: "Client-First", copy: "Long partnerships built on trust, transparency, and accountability." },
        { icon: Award, title: "Craft & Quality", copy: "Rigorous standards across everything we ship." },
        { icon: Users, title: "People Matter", copy: "Investing in our teams so they invest in yours." },
    ];
    return (
        <>
            <section className="gradient-hero py-20">
                <div className="container-page max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">About Us</p>
                    <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        The partner enterprises trust for people, tech, and operations.
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Since 2010, Vivyaan Business Systems has helped 500+ organizations scale with
                        confidence — combining specialized talent networks with battle-tested delivery teams.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page grid md:grid-cols-2 gap-12">
                    <div className="rounded-3xl border border-border bg-card p-10">
                        <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-brand-foreground">
                            <Target className="h-6 w-6" />
                        </div>
                        <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>
                        <p className="mt-3 text-muted-foreground leading-relaxed">
                            To be the most trusted partner for enterprises modernizing their workforce, technology,
                            and operations — combining deep specialization with a single point of accountability.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-border bg-card p-10">
                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-highlight text-highlight-foreground">
                            <Eye className="h-6 w-6" />
                        </div>
                        <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>
                        <p className="mt-3 text-muted-foreground leading-relaxed">
                            A world where every enterprise, regardless of size, has instant access to the talent
                            and technology it needs to compete on a global stage.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-surface border-y border-border">
                <div className="container-page">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Our Values</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What we stand for</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map((v) => {
                            const Icon = v.icon;
                            return (
                                <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-5 font-bold">{v.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{v.copy}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page">
                    <div className="rounded-3xl gradient-brand text-brand-foreground p-10 sm:p-14 grid md:grid-cols-3 gap-10">
                        <div>
                            <Globe2 className="h-10 w-10 text-highlight" />
                            <p className="mt-4 text-4xl font-extrabold">25+</p>
                            <p className="mt-1 text-brand-foreground/70">Countries</p>
                        </div>
                        <div>
                            <Users className="h-10 w-10 text-highlight" />
                            <p className="mt-4 text-4xl font-extrabold">500+</p>
                            <p className="mt-1 text-brand-foreground/70">Enterprise clients</p>
                        </div>
                        <div>
                            <Award className="h-10 w-10 text-highlight" />
                            <p className="mt-4 text-4xl font-extrabold">15+</p>
                            <p className="mt-1 text-brand-foreground/70">Years of delivery</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold">Ready to partner with us?</h2>
                    <Link
                        to="/contact"
                        className="mt-6 inline-flex items-center rounded-full gradient-brand px-8 py-3.5 text-sm font-bold text-brand-foreground shadow-elegant"
                    >
                        Talk to our team
                    </Link>
                </div>
            </section>
        </>
    );
}