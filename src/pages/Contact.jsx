import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { INDUSTRIES, SERVICES } from "../lib/services-data";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
    return (
        <>
            <section className="gradient-hero py-20">
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
                            Level 4, Prestige Tower<br />MG Road, Bengaluru 560001<br />Karnataka, India
                        </ContactCard>
                        <ContactCard icon={Phone} title="Phone">
                            <a href="tel:+918000000000" className="hover:text-brand">+91 80 0000 0000</a>
                            <br />
                            <a href="tel:+911100000000" className="hover:text-brand">+91 11 0000 0000</a>
                        </ContactCard>
                        <ContactCard icon={Mail} title="Email">
                            <a href="mailto:hello@vivyaan.com" className="hover:text-brand">hello@vivyaan.com</a>
                            <br />
                            <a href="mailto:careers@vivyaan.com" className="hover:text-brand">careers@vivyaan.com</a>
                        </ContactCard>
                        <ContactCard icon={Clock} title="Business Hours">
                            Mon – Fri: 9:00 AM – 7:00 PM IST<br />Sat: 10:00 AM – 2:00 PM IST
                        </ContactCard>
                        <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-video">
                            <iframe
                                title="Vivyaan office location"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=77.59%2C12.96%2C77.63%2C12.99&layer=mapnik&marker=12.9756%2C77.6100"
                                className="w-full h-full"
                                loading="lazy"
                            />
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
        </>
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
                    <a href="#" className="text-brand font-semibold">Privacy Policy</a>.
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