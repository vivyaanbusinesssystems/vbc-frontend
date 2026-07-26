import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { INDUSTRIES, SERVICES } from "../lib/services-data";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Instantly lands the user at the top of the page
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        // Triggers the smooth fade-in effect
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        // Wrapper for smooth mounting and mobile navbar clearance
        <div className={`transition-opacity duration-700 ease-out pb-20 lg:pb-0 ${isVisible ? "opacity-100" : "opacity-0"}`}>

            {/* Adjusted padding for mobile/desktop parity */}
            <section className="gradient-hero pt-16 lg:pt-28 pb-16 lg:pb-20">
                <div className="container-page max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Contact</p>
                    <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Get in Touch</h1>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Whether you're scaling a team, launching a product, or streamlining operations —
                        we'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page grid lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-2 space-y-6">
                        <ContactCard icon={MapPin} title="Head Office">
                            1157/9 Naya Nagar South<br />Sirwara Road Sultanpur, 228001<br />Uttar Pradesh, India
                        </ContactCard>
                        <ContactCard icon={Phone} title="Phone">
                            <a href="tel:+919151566767" className="hover:text-brand">+91 91515 66767</a>
                        </ContactCard>
                        <ContactCard icon={Mail} title="Email">
                            <a href="mailto:support@vivyaan.com" className="hover:text-brand">support@vivyaan.com</a>
                        </ContactCard>
                        <ContactCard icon={Clock} title="Business Hours">
                            Mon – Fri: 9:00 AM – 7:00 PM IST<br />Sat: 10:00 AM – 2:00 PM IST
                        </ContactCard>

                        {/* Interactive Grayscale Map */}
                        <div className="w-full h-75 sm:h-100 rounded-3xl overflow-hidden border border-border shadow-card relative mt-6">
                            <iframe
                                title="Vivyaan Business Systems Location"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=82.0528%2C26.2446%2C82.0928%2C26.2846&layer=mapnik&marker=26.2646%2C82.0728"
                                className="grayscale-20 contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            ></iframe>

                            <div className="absolute bottom-4 right-4 z-10">
                                <a
                                    href="https://www.openstreetmap.org/?mlat=26.2646&mlon=82.0728#map=15/26.2646/82.0728"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-background/90 backdrop-blur border border-border px-4 py-2 text-xs font-semibold text-brand shadow-sm hover:bg-brand hover:text-brand-foreground transition"
                                >
                                    View Larger Map
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card">
                            <h2 className="text-2xl font-bold">Send us an enquiry</h2>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Fill in the details and a solutions specialist will respond within 1 business day.
                            </p>
                            <EnquiryForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ContactCard({ icon: Icon, title, children }) {
    return (
        <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
                <h3 className="font-bold text-foreground">{title}</h3>
                <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{children}</div>
            </div>
        </div>
    );
}

function EnquiryForm() {
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            e.target.reset();
            toast.success("Enquiry received. We'll be in touch shortly.");
        }, 700);
    };

    return (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <TextField label="Full Name" name="name" required />
                <TextField label="Company" name="company" required />
                <TextField label="Work Email" name="email" type="email" required />
                <TextField label="Phone" name="phone" type="tel" />
            </div>
            <SelectField label="Service Required" name="service" required>
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
            </SelectField>
            <SelectField label="Industry" name="industry">
                <option value="">Select your industry…</option>
                {INDUSTRIES.map((i) => (
                    <option key={i} value={i}>{i}</option>
                ))}
            </SelectField>
            <div>
                <label className="text-sm font-semibold block mb-1.5">Message *</label>
                <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Share a few details about your requirement…"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none"
                />
            </div>
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 accent-[oklch(0.32_0.12_258)]" />
                <span>
                    I have read and agree to the{" "}
                    <Link to="/privacy" className="text-brand font-semibold hover:underline">Privacy Policy</Link>.
                </span>
            </label>
            <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full gradient-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-elegant hover:opacity-95 disabled:opacity-60 transition"
            >
                {submitting ? "Sending…" : "Submit Enquiry"}
            </button>
        </form>
    );
}

function TextField({ label, name, type = "text", required }) {
    return (
        <div>
            <label className="text-sm font-semibold block mb-1.5">
                {label} {required && <span className="text-destructive">*</span>}
            </label>
            <input
                name={name}
                type={type}
                required={required}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
        </div>
    );
}

function SelectField({ label, name, required, children }) {
    return (
        <div>
            <label className="text-sm font-semibold block mb-1.5">
                {label} {required && <span className="text-destructive">*</span>}
            </label>
            <select
                name={name}
                required={required}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
                {children}
            </select>
        </div>
    );
}