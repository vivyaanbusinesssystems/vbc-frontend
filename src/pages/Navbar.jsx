import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { CATEGORIES, getServicesByCategory } from "../lib/services-data";
import { cn } from "../lib/utils";

const NAV = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services", mega: true },
    { to: "/industries", label: "Industries" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
                    : "bg-background/60 backdrop-blur-md",
            )}
        >
            <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
                <Link to="/" className="flex items-center gap-2 shrink-0">
                    <span className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-brand-foreground shadow-elegant">
                        <Sparkles className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col leading-tight">
                        <span className="text-base font-bold tracking-tight text-foreground">Vivyaan</span>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            Business Systems
                        </span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1">
                    {NAV.map((item) =>
                        item.mega ? (
                            <div
                                key={item.to}
                                className="relative"
                                onMouseEnter={() => setMegaOpen(true)}
                                onMouseLeave={() => setMegaOpen(false)}
                            >
                                <Link
                                    to={item.to}
                                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand transition"
                                    activeProps={{ className: "text-brand" }}
                                >
                                    {item.label}
                                    <ChevronDown className="h-3.5 w-3.5" />
                                </Link>
                                {megaOpen && <MegaMenu onNavigate={() => setMegaOpen(false)} />}
                            </div>
                        ) : (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand transition"
                                activeProps={{ className: "text-brand" }}
                                activeOptions={{ exact: item.to === "/" }}
                            >
                                {item.label}
                            </Link>
                        ),
                    )}
                </nav>

                <div className="flex items-center gap-2">
                    <Link
                        to="/contact"
                        className="hidden md:inline-flex items-center rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-elegant hover:opacity-95 transition"
                    >
                        Get a Free Consultation
                    </Link>
                    <button
                        aria-label="Toggle menu"
                        className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden border-t border-border bg-background">
                    <div className="container-page py-4 flex flex-col gap-1">
                        {NAV.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
                                activeProps={{ className: "text-brand bg-brand-soft" }}
                                activeOptions={{ exact: item.to === "/" }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 inline-flex items-center justify-center rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
                        >
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

function MegaMenu({ onNavigate }) {
    const cats = Object.keys(CATEGORIES);
    return (
        <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2 w-215 max-w-[92vw]">
            <div className="rounded-2xl border border-border bg-popover shadow-2xl p-6 grid grid-cols-3 gap-6">
                {cats.map((key) => {
                    const c = CATEGORIES[key];
                    const services = getServicesByCategory(key);
                    return (
                        <div key={key}>
                            <p className="text-[11px] uppercase tracking-[0.16em] text-brand font-bold">
                                {c.label}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">{c.description}</p>
                            <ul className="mt-4 space-y-1.5">
                                {services.map((s) => (
                                    <li key={s.slug}>
                                        <Link
                                            to={`/services/${s.slug}`}
                                            onClick={onNavigate}
                                            className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-brand-soft hover:text-brand transition"
                                        >
                                            {s.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}