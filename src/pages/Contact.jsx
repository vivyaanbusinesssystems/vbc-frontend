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
        <div className={`overflow-x-hidden transition-opacity duration-700 ease-out pb-20 lg:pb-0 ${isVisible ? "opacity-100" : "opacity-0"}`}>
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

            <section className="py-12 sm:py-20">
                <div className="container-page grid lg:grid-cols-5 gap-8 lg:gap-10 min-w-0">
                    <div className="lg:col-span-2 min-w-0 space-y-4 sm:space-y-6">
                        <ContactCard icon={MapPin} title="Head Office">
                            1157/9 Naya Nagar South<br />Sirwara Road Sultanpur, 228001<br />Uttar Pradesh, India
                        </ContactCard>
                        <ContactCard icon={Phone} title="Phone">
                            <a href="tel:+919151566767" className="hover:text-brand">+91 91515 66767</a>
                        </ContactCard>
                        <ContactCard icon={Mail} title="Email">
                            <a href="mailto:support@vivyaanbusinesssystems.com" className="hover:text-brand break-all">support@vivyaanbusinesssystems.com</a>
                        </ContactCard>
                        <ContactCard icon={Clock} title="Business Hours">
                            Mon – Fri: 9:00 AM – 7:00 PM IST<br />Sat: 10:00 AM – 2:00 PM IST
                        </ContactCard>

                        <div className="w-full min-w-0 h-62.5 sm:h-100 rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-card relative mt-6">
                            <iframe
                                title="Vivyaan Business Systems Location"
                                scrolling="no"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=82.0528%2C26.2446%2C82.0928%2C26.2846&layer=mapnik&marker=26.2646%2C82.0728"
                                className="w-full h-full block grayscale-20ntrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            ></iframe>

                            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                                <a
                                    href="https://www.openstreetmap.org/?mlat=26.2646&mlon=82.0728#map=15/26.2646/82.0728"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-background/90 backdrop-blur border border-border px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-brand shadow-sm hover:bg-brand hover:text-brand-foreground transition"
                                >
                                    View Larger Map
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 min-w-0">
                        <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-card">
                            <h2 className="text-xl sm:text-2xl font-bold">Send us an enquiry</h2>
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
        <div className="flex w-full overflow-hidden gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-brand/40 transition-colors">
            <div className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
                <h3 className="font-bold text-foreground text-sm sm:text-base">{title}</h3>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed wrap-break-word">{children}</div>
            </div>
        </div>
    );
}

function EnquiryForm() {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Validates the form data and returns an object containing any errors
    const validateForm = (data) => {
        const newErrors = {};

        if (!data.name?.trim()) newErrors.name = "Please enter your full name.";
        if (!data.company?.trim()) newErrors.company = "Company name is required.";

        if (!data.email?.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (data.phone && !/^\+?[0-9\s\-]{7,15}$/.test(data.phone)) {
            newErrors.phone = "Please enter a valid phone number.";
        }

        if (!data.service) newErrors.service = "Please select a required service.";
        if (!data.message?.trim()) newErrors.message = "Please provide some details about your requirement.";
        if (!data.terms) newErrors.terms = "You must agree to the Privacy Policy.";

        return newErrors;
    };

    // Clears the error for a specific field as soon as the user starts typing
    const handleChange = (e) => {
        const { name } = e.target;
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());

        // Run validation
        const validationErrors = validateForm(payload);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // Stop submission if errors exist
        }

        setErrors({});
        setSubmitting(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/inquiry`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success("Enquiry received. We'll be in touch shortly.");
                e.target.reset();
            } else {
                toast.error(data.message || "Failed to submit enquiry. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Network error. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        // Added 'noValidate' to disable native browser popup tooltips so our custom UI takes over
        <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <TextField label="Full Name" name="name" required error={errors.name} onChange={handleChange} />
                <TextField label="Company" name="company" required error={errors.company} onChange={handleChange} />
                <TextField label="Work Email" name="email" type="email" required error={errors.email} onChange={handleChange} />
                <TextField label="Phone" name="phone" type="tel" error={errors.phone} onChange={handleChange} />
            </div>

            <SelectField label="Service Required" name="service" required error={errors.service} onChange={handleChange}>
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
            </SelectField>

            <SelectField label="Industry" name="industry" error={errors.industry} onChange={handleChange}>
                <option value="">Select your industry…</option>
                {INDUSTRIES.map((i) => (
                    <option key={i} value={i}>{i}</option>
                ))}
            </SelectField>

            <div>
                <label className="text-sm font-semibold block mb-1.5">
                    Message <span className="text-destructive">*</span>
                </label>
                <textarea
                    name="message"
                    required
                    rows={4}
                    onChange={handleChange}
                    placeholder="Share a few details about your requirement…"
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${errors.message
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-border focus:border-brand focus:ring-brand/20"
                        }`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.message}</p>}
            </div>

            <div>
                <label className="flex items-start gap-2 text-xs text-muted-foreground">
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={handleChange}
                        className="mt-0.5 accent-[oklch(0.32_0.12_258)] shrink-0"
                    />
                    <span>
                        I have read and agree to the{" "}
                        <Link to="/privacy" className="text-brand font-semibold hover:underline">Privacy Policy</Link>.
                    </span>
                </label>
                {errors.terms && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.terms}</p>}
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full gradient-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-elegant hover:opacity-95 disabled:opacity-60 transition mt-2"
            >
                {submitting ? "Sending…" : "Submit Enquiry"}
            </button>
        </form>
    );
}

function TextField({ label, name, type = "text", required, error, onChange }) {
    return (
        <div>
            <label className="text-sm font-semibold block mb-1.5">
                {label} {required && <span className="text-destructive">*</span>}
            </label>
            <input
                name={name}
                type={type}
                onChange={onChange}
                className={`w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors ${error
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-border focus:border-brand focus:ring-brand/20"
                    }`}
            />
            {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
}

function SelectField({ label, name, required, error, onChange, children }) {
    return (
        <div>
            <label className="text-sm font-semibold block mb-1.5">
                {label} {required && <span className="text-destructive">*</span>}
            </label>
            <select
                name={name}
                onChange={onChange}
                className={`w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors ${error
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-border focus:border-brand focus:ring-brand/20"
                    }`}
            >
                {children}
            </select>
            {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
}