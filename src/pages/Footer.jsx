import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { SERVICES } from "../lib/services-data";

// Custom SVG Icons to replace the removed Lucide brand icons
const Facebook = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const Twitter = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const Linkedin = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export default function Footer() {
    const coreServices = SERVICES.slice(0, 6);

    return (
        <footer className="mt-24 bg-primary text-primary-foreground hidden md:block">
            <div className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-highlight text-highlight-foreground">
                            <Sparkles className="h-5 w-5" />
                        </span>
                        <div className="leading-tight">
                            <p className="text-base font-bold">Vivyaan</p>
                            <p className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">
                                Business Systems
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
                        Your strategic bridge for enterprise talent, technology, and operations —
                        enabling companies to scale with confidence.
                    </p>
                    <div className="mt-5 flex gap-3">
                        {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-highlight hover:text-highlight-foreground transition"
                                aria-label="Social link"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground">
                        Quick Links
                    </h4>
                    <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
                        <li><Link to="/" className="hover:text-highlight transition">Home</Link></li>
                        <li><Link to="/about" className="hover:text-highlight transition">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-highlight transition">Services</Link></li>
                        <li><Link to="/industries" className="hover:text-highlight transition">Industries</Link></li>
                        <li><Link to="/contact" className="hover:text-highlight transition">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground">
                        Core Services
                    </h4>
                    <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
                        {coreServices.map((s) => (
                            <li key={s.slug}>
                                <Link
                                    to={`/services/${s.slug}`}
                                    className="hover:text-highlight transition"
                                >
                                    {s.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground">
                        Contact
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
                        <li className="flex gap-3">
                            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-highlight" />
                            <span>1157/9 Naya Nagar South, Sirwara Road, Sultanpur, 228001, Uttar Pradesh, India</span>
                        </li>
                        <li className="flex gap-3">
                            <Phone className="h-4 w-4 mt-0.5 shrink-0 text-highlight" />
                            <a href="tel:+919151566767" className="hover:text-highlight transition">+91 91515 66767</a>
                        </li>
                        <li className="flex gap-3">
                            <Mail className="h-4 w-4 mt-0.5 shrink-0 text-highlight" />
                            <a href="mailto:support@vivyaanbusinesssystems.com" className="hover:text-highlight transition">support@vivyaanbusinesssystems.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
                    <p>© {new Date().getFullYear()} Vivyaan Business Systems Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-5">
                        <Link to="/privacy" className="hover:text-highlight transition">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-highlight transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}