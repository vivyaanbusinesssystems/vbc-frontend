import { useState } from "react";
import { toast } from "sonner";
import { SERVICES } from "../lib/services-data";

export default function LeadForm({ defaultService = "" }) {
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            e.target.reset();
            toast.success("Thanks! We'll be in touch within 1 business day.");
        }, 700);
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Work Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
            </div>
            <div>
                <label className="text-sm font-semibold text-foreground block mb-1.5">
                    Service Required
                </label>
                <select
                    name="service"
                    defaultValue={defaultService}
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug}>
                            {s.title}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="text-sm font-semibold text-foreground block mb-1.5">Message</label>
                <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project or hiring need…"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none"
                />
            </div>
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 accent-[oklch(0.32_0.12_258)]" />
                <span>
                    I agree to the processing of my data as described in the{" "}
                    <a href="#" className="text-brand font-semibold">Privacy Policy</a>.
                </span>
            </label>
            <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full gradient-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-elegant hover:opacity-95 disabled:opacity-60 transition"
            >
                {submitting ? "Sending…" : "Send Enquiry"}
            </button>
        </form>
    );
}

function Field({ label, name, type = "text", required }) {
    return (
        <div>
            <label className="text-sm font-semibold text-foreground block mb-1.5">
                {label} {required && <span className="text-destructive">*</span>}
            </label>
            <input
                name={name}
                type={type}
                required={required}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
        </div>
    );
}