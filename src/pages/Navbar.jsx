import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    ChevronDown,
    Sparkles,
    Home,
    Building2,
    Layers,
    Info,
    Phone
} from "lucide-react";
import { CATEGORIES, getServicesByCategory } from "../lib/services-data";
import { cn } from "../lib/utils";

// Added icons to the NAV array for the mobile bottom bar
const NAV = [
    { to: "/", label: "Home", icon: Home },
    { to: "/industries", label: "Industries", icon: Building2 },
    { to: "/services", label: "Services", mega: true, icon: Layers },
    { to: "/about", label: "About Us", icon: Info },
    { to: "/contact", label: "Contact Us", icon: Phone },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Top Navigation Bar */}
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

                    {/* Desktop Navigation */}
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

                    {/* Desktop CTA */}
                    <div className="flex items-center gap-2">
                        <Link
                            to="/contact"
                            className="hidden md:inline-flex items-center rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-elegant hover:opacity-95 transition"
                        >
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile Bottom Navigation Bar (Instagram Style) */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-border bg-background/95 backdrop-blur-xl px-2 pb-safe shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
                {NAV.map((item) => {
                    const Icon = item.icon;
                    // Logic to check if the current route matches the tab
                    const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to));

                    return (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 w-full h-full transition-colors duration-200",
                                isActive ? "text-brand" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Icon
                                className={cn(
                                    "h-5 w-5 transition-transform duration-200",
                                    isActive ? "scale-110 stroke-[2.5px]" : "stroke-2"
                                )}
                            />
                            <span className="text-[10px] font-medium leading-none tracking-tight">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}

function MegaMenu({ onNavigate }) {
    const cats = Object.keys(CATEGORIES);
    return (
        <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2 w-150 max-w-[92vw]">
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