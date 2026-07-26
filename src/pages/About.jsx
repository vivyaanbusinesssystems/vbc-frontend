import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Target, Eye, Heart, Award, Users, Globe2,
    Shield, Lightbulb, CheckCircle, ArrowRight, Layers
} from "lucide-react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Instantly lands the user at the top of the page
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        // Triggers the smooth fade-in effect
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const values = [
        { icon: Shield, title: "Integrity", copy: "We operate with honesty, transparency, and professionalism." },
        { icon: Heart, title: "Customer First", copy: "Our clients' success is our highest priority." },
        { icon: Lightbulb, title: "Innovation", copy: "We continuously embrace new ideas and technologies." },
        { icon: Award, title: "Quality Excellence", copy: "We deliver services that exceed expectations." },
        { icon: Users, title: "Collaboration", copy: "We believe in teamwork and long-term partnerships." },
        { icon: CheckCircle, title: "Commitment", copy: "We are dedicated to achieving measurable business outcomes." },
    ];

    const missionPoints = [
        "Deliver exceptional recruitment and staffing solutions across industries.",
        "Build innovative software and digital solutions that improve business performance.",
        "Help organizations adopt technology for greater efficiency and growth.",
        "Create lasting partnerships through transparency, quality, and reliability.",
        "Contribute to business success by providing end-to-end workforce and technology services."
    ];

    const hiringSteps = [
        { step: "01", title: "Understanding Requirements", desc: "Thoroughly assessing job roles, required skills, budget, and company culture." },
        { step: "02", title: "Talent Sourcing", desc: "Leveraging job portals, internal databases, networks, and direct headhunting." },
        { step: "03", title: "Candidate Screening", desc: "Careful review of qualifications, expertise, and overall suitability." },
        { step: "04", title: "Initial Assessment", desc: "Preliminary interviews evaluating technical knowledge and behavioural fit." },
        { step: "05", title: "Interview Coordination", desc: "Scheduling and managing smooth communication between candidates and clients." },
        { step: "06", title: "Selection & Offers", desc: "Assisting with salary negotiations, documentation, and seamless onboarding." },
        { step: "07", title: "Background Verification", desc: "Facilitating employment, education, and reference checks when required." },
        { step: "08", title: "Post-Placement Support", desc: "Maintaining regular follow-ups to ensure a smooth transition and long-term satisfaction." }
    ];

    return (
        <div className={`transition-opacity duration-700 ease-out pb-20 lg:pb-0 ${isVisible ? "opacity-100" : "opacity-0"}`}>

            {/* Adjusted padding for mobile/desktop parity */}
            <section className="gradient-hero pt-16 lg:pt-28 pb-16 lg:pb-20">
                <div className="container-page max-w-4xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">About Us</p>
                    <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Empowering Businesses with <span className="text-brand">Smart Workforce & Technology Solutions</span>
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Vivyaan Business Systems Pvt. Ltd. is a fast-growing business solutions company committed to
                        helping organizations accelerate growth through innovative workforce,
                        technology, and digital transformation services.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page max-w-6xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold">A Trusted Partner for Growth</h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            Our integrated approach combines human expertise with modern technology to simplify business
                            operations, improve efficiency, and enable sustainable growth. Whether businesses require skilled talent,
                            enterprise software, digital marketing, ERP implementation, or customized IT solutions, we act as a
                            trusted long-term partner dedicated to delivering measurable results.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Premium Vision Box */}
                        <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-linear-to-br from-brand/5 to-transparent p-10 sm:p-12 shadow-sm">
                            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-highlight text-highlight-foreground shadow-sm">
                                        <Eye className="h-7 w-7" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                                </div>
                                <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                                    To become one of India's most trusted business solutions companies by empowering organizations
                                    with innovative workforce, technology, and digital transformation services that create
                                    long-term business value.
                                </p>
                            </div>
                        </div>

                        {/* Premium Mission Box */}
                        <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-linear-to-bl from-brand/5 to-transparent p-10 sm:p-12 shadow-sm">
                            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-brand-foreground shadow-elegant">
                                        <Target className="h-7 w-7" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                                </div>
                                <ul className="space-y-4">
                                    {missionPoints.map((point, index) => (
                                        <li key={index} className="flex gap-4 items-start">
                                            <div className="mt-1 shrink-0 grid h-6 w-6 place-items-center rounded-full bg-brand/20">
                                                <CheckCircle className="h-4 w-4 text-brand" />
                                            </div>
                                            <span className="text-base text-foreground/80 leading-relaxed font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Hiring Process Section */}
            <section className="py-20 bg-surface border-t border-border">
                <div className="container-page">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">How We Work</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Our Hiring Process</h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            A structured, transparent, and efficient methodology designed to connect the right talent
                            with the right opportunities, ensuring speed and quality for both clients and candidates.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hiringSteps.map((s, i) => (
                            <div
                                key={i}
                                className="relative rounded-3xl border border-border bg-card p-8 hover:border-brand/40 hover:shadow-card transition-all group overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-6 text-[80px] font-extrabold text-brand/5 group-hover:text-brand/10 transition-colors pointer-events-none select-none">
                                    {s.step}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-3 pr-6">{s.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 rounded-2xl bg-brand-soft p-6 sm:p-8 text-center max-w-4xl mx-auto border border-brand/20">
                        <p className="text-brand font-semibold text-lg">
                            "Our commitment is to deliver skilled professionals who contribute to your business growth while helping candidates build rewarding careers."
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 border-y border-border">
                <div className="container-page">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Our Core Values</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What we stand for</h2>
                        <p className="mt-4 text-muted-foreground">
                            Built on a foundation of quality, integrity, and customer satisfaction.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {values.map((v) => {
                            const Icon = v.icon;
                            return (
                                <div key={v.title} className="rounded-2xl border border-border bg-card p-8 hover:border-brand/40 hover:shadow-card transition-all">
                                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand mb-6">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">{v.title}</h3>
                                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.copy}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Business Highlights */}
            <section className="py-20 bg-surface">
                <div className="container-page">
                    <div className="rounded-3xl gradient-brand text-brand-foreground p-10 sm:p-14 grid md:grid-cols-3 gap-10 lg:gap-16">
                        <div className="text-center md:text-left">
                            <Globe2 className="h-12 w-12 text-highlight mx-auto md:mx-0" />
                            <p className="mt-6 text-2xl font-bold">Growing Network</p>
                            <p className="mt-3 text-brand-foreground/80 leading-relaxed">
                                Expanding partnerships with startups, SMEs, and enterprises across multiple industries.
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <Layers className="h-12 w-12 text-highlight mx-auto md:mx-0" />
                            <p className="mt-6 text-2xl font-bold">Multi-Service</p>
                            <p className="mt-3 text-brand-foreground/80 leading-relaxed">
                                End-to-end solutions combining Recruitment, Technology, and Consulting under one roof.
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <Award className="h-12 w-12 text-highlight mx-auto md:mx-0" />
                            <p className="mt-6 text-2xl font-bold">Quality Driven</p>
                            <p className="mt-3 text-brand-foreground/80 leading-relaxed">
                                Unwavering commitment to operational excellence, transparency, and timely delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold">Ready to partner with us?</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Experience the difference of a strategic partner dedicated to your long-term success.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-3.5 text-sm font-bold text-brand-foreground shadow-elegant hover:scale-[1.02] transition group"
                    >
                        Talk to our team <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}