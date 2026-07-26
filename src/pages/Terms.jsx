import { useEffect, useState } from "react";
import { FileText, AlertCircle, Scale, CheckCircle } from "lucide-react";

export default function Terms() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const sections = [
        {
            icon: CheckCircle,
            title: "1. Acceptance of Terms",
            content: "By accessing and using the Vivyaan Business Systems website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services."
        },
        {
            icon: FileText,
            title: "2. Intellectual Property",
            content: "The content, organization, graphics, design, compilation, and other matters related to our site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the site is strictly prohibited."
        },
        {
            icon: AlertCircle,
            title: "3. Disclaimer of Warranties",
            content: "Our services are provided \"as is\" without any representations or warranties, express or implied. Vivyaan Business Systems makes no representations or warranties in relation to this website or the information and materials provided on this website."
        },
        {
            icon: Scale,
            title: "4. Limitations of Liability",
            content: "Vivyaan Business Systems will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special or consequential loss arising out of the use of our services."
        }
    ];

    return (
        <div className={`transition-opacity duration-700 ease-out pb-20 lg:pb-12 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Header Section - Adjusted padding for mobile/desktop parity */}
            <section className="pt-16 lg:pt-28 pb-16 lg:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-surface -z-10" />
                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full gradient-brand opacity-10 blur-3xl" />

                <div className="container-page max-w-4xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                        Legal & Compliance
                    </p>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-foreground">
                        Terms of Service
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Please read these terms carefully before using our services. They outline your rights, responsibilities, and the rules governing our platform.
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}