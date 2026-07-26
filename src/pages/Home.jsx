import { Link } from "react-router-dom";
import {
    Users,
    Briefcase,
    Code,
    Database,
    Globe,
    TrendingUp,
    HeadphonesIcon,
    UserCheck,
    HardHat,
    Layout,
    Lightbulb,
    Sparkles,
    Star,
    Quote,
    Layers,
    Settings,
    CheckCircle,
    Heart,
    ArrowRight
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import heroImg from "../assets/hero.jpg";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        // Reduced from pb-24 to pb-20 so it just tightly clears the 4rem (64px) bottom mobile navbar
        <div className={`transition-opacity duration-700 ease-out pb-20 lg:pb-0 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <Hero />
            <CompanyIntro />
            <CoreServices />
            <WhyChooseUs />
            <IndustriesMarquee />
            <Testimonials />
            <PreFooterCTA />
        </div>
    );
}

function Hero() {
    return (
        <section className="relative gradient-hero overflow-hidden">
            {/* Reduced pt-28 to pt-20, which is exactly 80px (just enough to clear your top navbar without a huge gap) */}
            <div className="container-page grid lg:grid-cols-2 gap-12 pt-10 pb-10 lg:py-24 items-center">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs font-semibold text-brand">
                        <Sparkles className="h-3.5 w-3.5" /> Vivyaan Business Systems Pvt. Ltd.
                    </span>
                    <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
                        Empowering Businesses with <span className="text-brand">Smart Workforce & Technology Solutions</span>
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
                        At Vivyaan Business Systems Pvt. Ltd., we help businesses grow by delivering reliable workforce solutions and innovative technology services. From talent acquisition and staffing to software development and digital transformation, we provide customised solutions that drive efficiency, productivity, and sustainable growth.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-elegant hover:opacity-95 transition group"
                        >
                            Get a Free Consultation <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
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
                    Welcome to Vivyaan Business Systems
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    Vivyaan Business Systems Pvt. Ltd. is a trusted business solutions company committed to helping organisations succeed through people, technology, and innovation. We provide end-to-end services across recruitment, staffing, software development, ERP solutions, website development, digital marketing, BPO, HR consulting, and business consulting.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Our experienced team works closely with clients to understand their unique requirements and deliver practical, scalable, and cost-effective solutions. Whether you are a startup, SME, or large enterprise, Vivyaan is your reliable growth partner.
                </p>
            </div>
        </section>
    );
}

function CoreServices() {
    const services = [
        {
            title: "Recruitment & Manpower",
            slug: "recruitment-manpower",
            icon: Users,
            copy: "Permanent recruitment, contractual staffing, executive search, bulk hiring, campus recruitment, and talent acquisition.",
        },
        {
            title: "Domestic Staffing",
            slug: "domestic-staffing",
            icon: Briefcase,
            copy: "Skilled professionals and workforce solutions across India for IT, Non-IT, manufacturing, healthcare, and retail.",
        },
        {
            title: "IT & Software Development",
            slug: "it-software-development",
            icon: Code,
            copy: "Custom software development, enterprise applications, mobile apps, cloud solutions, CRM systems, and API integration.",
        },
        {
            title: "ERP Solutions",
            slug: "erp-solutions",
            icon: Database,
            copy: "End-to-end ERP consulting, implementation, customization, migration, integration, support, training, and maintenance.",
        },
        {
            title: "Web Development",
            slug: "web-development",
            icon: Globe,
            copy: "Designing and developing modern, responsive, secure, and scalable websites, e-commerce platforms, and web portals.",
        },
        {
            title: "Digital Marketing",
            slug: "digital-marketing",
            icon: TrendingUp,
            copy: "Search Engine Optimization (SEO), Google Ads (PPC), Social Media Marketing, Content Marketing, and Lead Generation.",
        },
        {
            title: "BPO Services",
            slug: "bpo-services",
            icon: HeadphonesIcon,
            copy: "Reliable business process outsourcing solutions including customer support, technical support, back-office, and data entry.",
        },
        {
            title: "HR Consulting",
            slug: "hr-consulting",
            icon: UserCheck,
            copy: "Supporting organisations with HR policy development, payroll management, statutory compliance, and performance management.",
        },
        {
            title: "Blue Collar Workforce",
            slug: "blue-collar-workforce",
            icon: HardHat,
            copy: "Supplying reliable skilled manpower including factory workers, machine operators, drivers, security guards, and technicians.",
        },
        {
            title: "Website Design",
            slug: "website-design",
            icon: Layout,
            copy: "Creating visually appealing, user-friendly, and SEO-optimised corporate websites, landing pages, and e-commerce stores.",
        },
        {
            title: "Business Consulting",
            slug: "business-consulting",
            icon: Lightbulb,
            copy: "Helping startups, SMEs, and enterprises with business strategy, operational excellence, process optimisation, and market expansion.",
        }
    ];

    return (
        <section className="py-20 bg-surface">
            <div className="container-page">
                <div className="text-center mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                        Our Core Services
                    </p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                        End-to-End Business Solutions
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="group rounded-3xl border border-border bg-card p-8 flex flex-col hover:shadow-elegant hover:-translate-y-1 hover:border-brand/40 transition-all cursor-pointer"
                            >
                                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-brand-foreground shadow-elegant mb-6">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">{service.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed grow">{service.copy}</p>
                                <div className="mt-6 text-sm font-semibold text-brand flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn more <span className="text-lg leading-none">&rarr;</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function WhyChooseUs() {
    const items = [
        { icon: Layers, copy: "End-to-end workforce and IT solutions under one roof" },
        { icon: Users, copy: "Experienced professionals across multiple business domains" },
        { icon: Settings, copy: "Customized solutions tailored to your business needs" },
        { icon: CheckCircle, copy: "Quality-driven processes and timely delivery" },
        { icon: TrendingUp, copy: "Cost-effective and scalable service models" },
        { icon: Heart, copy: "Strong focus on client satisfaction and long-term relationships" },
        { icon: HeadphonesIcon, copy: "Reliable support throughout every stage of engagement" },
    ];
    return (
        <section className="py-20">
            <div className="container-page">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Why Vivyaan</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                        Why Choose Vivyaan Business Systems?
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((i, idx) => {
                        const Icon = i.icon;
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-card transition"
                            >
                                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand shrink-0">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <p className="text-sm font-semibold text-foreground leading-tight">{i.copy}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function IndustriesMarquee() {
    const industries = [
        "Information Technology (IT)", "Healthcare & Life Sciences", "Manufacturing",
        "Banking & Financial Services", "Retail & E-commerce", "Logistics & Supply Chain",
        "Automobile", "Pharmaceuticals", "Education", "Telecommunications",
        "Engineering", "FMCG", "Hospitality", "Construction", "Energy & Utilities"
    ];
    const list = [...industries, ...industries];

    return (
        <section className="py-16 border-y border-border bg-surface overflow-hidden">
            <div className="container-page mb-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Industries We Serve</p>
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

function Testimonials() {
    const items = [
        {
            quote: "Vivyaan helped us close multiple critical hiring positions quickly with highly qualified candidates. Their professionalism and responsiveness made the entire recruitment process seamless.",
            name: "HR Manager",
            title: "Technology Company",
        },
        {
            quote: "Their web development and digital marketing services significantly improved our online presence and customer engagement.",
            name: "Business Owner",
            title: "Retail Business",
        },
        {
            quote: "The team understood our staffing requirements perfectly and consistently delivered quality talent within the expected timelines.",
            name: "Operations Director",
            title: "IT Services Company",
        },
    ];

    const [idx, setIdx] = useState(0);
    const containerRef = useRef(null);

    const nextSlide = useCallback(() => setIdx((i) => (i + 1) % items.length), [items.length]);
    const prevSlide = useCallback(() => setIdx((i) => (i - 1 + items.length) % items.length), [items.length]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let isSwiping = false;
        let startX = 0;

        const handleWheel = (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();

                if (!isSwiping && Math.abs(e.deltaX) > 25) {
                    isSwiping = true;
                    if (e.deltaX > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                    setTimeout(() => { isSwiping = false; }, 600);
                }
            }
        };

        const handleTouchStart = (e) => {
            startX = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        el.addEventListener("touchstart", handleTouchStart, { passive: true });
        el.addEventListener("touchend", handleTouchEnd, { passive: true });

        const timer = setInterval(() => {
            setIdx((i) => (i + 1) % items.length);
        }, 6000);

        return () => {
            el.removeEventListener("wheel", handleWheel);
            el.removeEventListener("touchstart", handleTouchStart);
            el.removeEventListener("touchend", handleTouchEnd);
            clearInterval(timer);
        };
    }, [nextSlide, prevSlide, items.length]);

    return (
        <section className="py-20">
            <div className="container-page max-w-4xl">
                <div className="text-center mb-10">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Testimonials</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
                </div>
                <div
                    ref={containerRef}
                    className="relative rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-card select-none touch-pan-y overscroll-x-none"
                    style={{ WebkitUserSelect: "none" }}
                >
                    <Quote className="absolute top-6 left-6 sm:top-8 sm:left-8 h-10 w-10 sm:h-12 sm:w-12 text-brand-soft/40 sm:text-brand-soft z-0" />

                    <div className="relative z-10 min-h-55 flex flex-col justify-center cursor-grab active:cursor-grabbing pt-10 sm:pt-0">
                        <p className="text-lg sm:text-xl leading-relaxed text-foreground italic">
                            "{items[idx].quote}"
                        </p>
                        <div className="mt-6 flex items-center gap-3 pointer-events-none">
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
                    <div className="mt-8 flex justify-center gap-2 relative z-10">
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
        <section className="py-20 hidden md:block">
            <div className="container-page">
                <div className="relative overflow-hidden rounded-3xl gradient-brand px-8 py-14 sm:px-14 sm:py-20 text-center">
                    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-highlight/30 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                    <div className="relative">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-foreground max-w-3xl mx-auto">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="mt-4 text-brand-foreground/80 max-w-2xl mx-auto text-lg">
                            Whether you need skilled professionals, innovative technology solutions, or strategic business support, Vivyaan Business Systems Pvt. Ltd. is here to help. Partner with us to build stronger teams, optimise operations, and accelerate business growth.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-highlight text-highlight-foreground px-8 py-4 text-base font-bold shadow-2xl hover:scale-[1.02] transition group"
                        >
                            Let's Build Success Together <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}