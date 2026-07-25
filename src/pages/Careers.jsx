import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase } from "lucide-react";

const OPENINGS = [
    { title: "Senior React Engineer", loc: "Bengaluru / Remote", type: "Full-time", team: "Technology" },
    { title: "Cloud DevOps Specialist", loc: "Hyderabad", type: "Full-time", team: "Technology" },
    { title: "Talent Acquisition Lead", loc: "Mumbai", type: "Full-time", team: "Workforce" },
    { title: "Data Engineer", loc: "Remote", type: "Contract", team: "Technology" },
    { title: "BPO Team Lead", loc: "Pune", type: "Full-time", team: "Operations" },
    { title: "Digital Marketing Manager", loc: "Delhi NCR", type: "Full-time", team: "Operations" },
];

export default function Careers() {
    return (
        <>
            <section className="gradient-hero py-20">
                <div className="container-page max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Careers</p>
                    <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Build a career that scales enterprises.
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Join a team that combines the pace of a consultancy with the depth of a product company.
                        We hire curious people who love solving hard problems.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page">
                    <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Open Roles</p>
                            <h2 className="mt-2 text-3xl font-bold">{OPENINGS.length} positions currently open</h2>
                        </div>
                        <a href="mailto:careers@vivyaan.com" className="text-sm font-semibold text-brand hover:underline">
                            Don't see a fit? Send us your CV →
                        </a>
                    </div>
                    <div className="space-y-3">
                        {OPENINGS.map((r) => (
                            <div
                                key={r.title}
                                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-card transition sm:flex sm:justify-between"
                            >
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-lg font-bold truncate">{r.title}</h3>
                                        <span className="rounded-full bg-brand-soft text-brand text-xs font-semibold px-2.5 py-0.5">
                                            {r.team}
                                        </span>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {r.loc}</span>
                                        <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {r.type}</span>
                                        <span className="inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {r.team}</span>
                                    </div>
                                </div>
                                <Link
                                    to="/contact"
                                    className="shrink-0 inline-flex items-center rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
                                >
                                    Apply
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}