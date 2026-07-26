import { useEffect, useState } from "react";
import { Shield, Eye, Lock, Mail } from "lucide-react";

export default function Privacy() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const sections = [
        {
            icon: Eye,
            title: "1. Information We Collect",
            content: "We collect information you provide directly to us when you request information, sign up for our services, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide."
        },
        {
            icon: Shield,
            title: "2. How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, communicate with you (including responding to your comments and questions), understand and analyze how you use our website, and develop new products and features."
        },
        {
            icon: Lock,
            title: "3. Data Security",
            content: "We implement appropriate technical and organizational measures to maintain the safety of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure."
        },
        {
            icon: Mail,
            title: "4. Contact Us",
            content: "If you have any questions about this Privacy Policy, please contact our support team.",
            link: "mailto:support@vivyaanbusinesssystems.com",
            linkText: "support@vivyaanbusinesssystems.com"
        }
    ];

    return (
        <div className={`transition-opacity duration-700 ease-out pb-20 lg:pb-12 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Header Section - Adjusted padding for mobile/desktop parity */}
            <section className="pt-16 lg:pt-28 pb-16 lg:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-surface -z-10" />
                <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full gradient-brand opacity-10 blur-3xl" />

                <div className="container-page max-w-4xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                        Legal & Compliance
                    </p>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-foreground">
                        Privacy Policy
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Your privacy is critically important to us. This policy outlines how Vivyaan Business Systems Pvt. Ltd. collects, uses, and protects your information.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground/70">
                        Last updated: {new Date().toLocaleDateString('en-IN')}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-10">
                <div className="container-page max-w-4xl">
                    <div className="flex flex-col gap-6">
                        {sections.map((section, idx) => {
                            const Icon = section.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group rounded-3xl border border-border bg-card p-8 sm:p-10 hover:shadow-elegant hover:border-brand/40 transition-all"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand shrink-0">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-foreground">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed text-lg pl-0 sm:pl-16">
                                        {section.content}
                                    </p>
                                    {section.link && (
                                        <div className="pl-0 sm:pl-16 mt-4">
                                            <a
                                                href={section.link}
                                                className="inline-flex items-center text-brand font-semibold hover:underline"
                                            >
                                                {section.linkText}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}