export const CATEGORIES = {
    workforce: { label: "Workforce & Staffing", description: "Skilled manpower and staffing solutions." },
    technology: { label: "Technology Solutions", description: "End-to-end IT engineering and platforms." },
    operations: { label: "Digital & Operations", description: "Process, marketing, and back-office ops." },
};

export const SERVICES = [
    {
        slug: "contract-staffing",
        title: "Contract Staffing",
        category: "workforce",
        categoryLabel: "Workforce & Staffing",
        tagline: "Flexible, project-based talent — deployed fast.",
        intro:
            "Scale your teams on demand with pre-vetted contract professionals across engineering, operations, and business functions.",
        subServices: [
            { title: "Short-Term Contracts", description: "Onboard specialists in weeks for peak-load projects." },
            { title: "Long-Term Assignments", description: "Extended engagements with dedicated resources." },
            { title: "Contract-to-Hire", description: "Trial-based hiring for confident permanent conversions." },
            { title: "Project-Based Teams", description: "Ready-made pods delivered as a managed unit." },
        ],
        tagsLabel: "Popular Roles We Staff",
        tags: ["Java Developer", "React Engineer", "DevOps", "Data Analyst", "QA Engineer", "Cloud Architect", "Scrum Master", "Business Analyst", "SAP Consultant", "Network Engineer"],
        benefits: [
            "Access a curated bench of 10,000+ vetted professionals.",
            "Fill critical roles in an average of 7 working days.",
            "Fully compliant with statutory and payroll regulations.",
            "Transparent, fixed monthly billing — no hidden fees.",
            "Dedicated account manager for every engagement.",
            "Replacement guarantee within contract term.",
        ],
    },
    {
        slug: "permanent-recruitment",
        title: "Permanent Recruitment",
        category: "workforce",
        categoryLabel: "Workforce & Staffing",
        tagline: "Executive and specialist hiring, done right.",
        intro:
            "From mid-level specialists to CxO leadership, we source, screen, and secure permanent talent aligned with your culture.",
        subServices: [
            { title: "Executive Search", description: "Confidential leadership hiring for critical roles." },
            { title: "IT & Tech Hiring", description: "Full-stack technical recruitment at scale." },
            { title: "Bulk & Campus Hiring", description: "High-volume graduate and lateral drives." },
            { title: "Diversity Hiring", description: "Focused sourcing for balanced, inclusive teams." },
        ],
        tagsLabel: "Functions Covered",
        tags: ["Engineering", "Product", "Design", "Sales", "Marketing", "Finance", "HR", "Operations", "Legal", "Supply Chain"],
        benefits: [
            "AI-augmented sourcing across 50+ channels.",
            "Behavioural and technical assessments included.",
            "Offer-to-join ratio above 92%.",
            "90-day replacement guarantee on every hire.",
            "Structured interview coordination and feedback.",
            "Market intelligence and salary benchmarking.",
        ],
    },
    {
        slug: "payroll-management",
        title: "Payroll Management",
        category: "workforce",
        categoryLabel: "Workforce & Staffing",
        tagline: "Accurate, compliant, and on time — every cycle.",
        intro:
            "Outsource payroll processing, compliance, and employee query resolution to a specialist team backed by robust tooling.",
        subServices: [
            { title: "Monthly Payroll Processing", description: "End-to-end salary computation and disbursal." },
            { title: "Statutory Compliance", description: "PF, ESI, PT, TDS, LWF handled with audit trails." },
            { title: "Reimbursements & F&F", description: "Structured claim workflows and settlements." },
            { title: "Employee Self-Service", description: "Payslips, tax declarations, and helpdesk." },
        ],
        tagsLabel: "Compliance Coverage",
        tags: ["PF", "ESI", "PT", "TDS", "LWF", "Gratuity", "Bonus", "Shops & Establishment", "Contract Labour Act", "Form 16"],
        benefits: [
            "Zero-error payroll with two-tier validation.",
            "Fully compliant across all Indian states.",
            "Employee self-service portal and mobile app.",
            "Detailed MIS and analytics dashboards.",
            "Dedicated compliance officer per client.",
            "SLA-backed query resolution within 24 hours.",
        ],
    },
    {
        slug: "custom-software",
        title: "Custom Software Development",
        category: "technology",
        categoryLabel: "Technology Solutions",
        tagline: "Product engineering built for scale and speed.",
        intro:
            "We design, build, and modernize enterprise-grade software — from internal platforms to customer-facing products.",
        subServices: [
            { title: "Enterprise Applications", description: "Line-of-business platforms tailored to your ops." },
            { title: "SaaS Product Engineering", description: "Multi-tenant, subscription-ready products." },
            { title: "Legacy Modernization", description: "Refactor and re-platform for cloud-native scale." },
            { title: "API & Integration", description: "Composable services and third-party integrations." },
        ],
        tagsLabel: "Technology Stack",
        tags: ["React", "Next.js", "Node.js", "Python", "Java", "Spring Boot", ".NET", "PostgreSQL", "MongoDB", "AWS", "Azure", "GCP", "Docker", "Kubernetes"],
        benefits: [
            "Agile pods with product managers and architects.",
            "Test-driven delivery with 80%+ code coverage.",
            "CI/CD and DevOps built into every engagement.",
            "Fixed-price or T&M engagement models.",
            "Security-by-design with OWASP compliance.",
            "Post-launch SLAs and managed support.",
        ],
    },
    {
        slug: "mobile-apps",
        title: "Mobile App Development",
        category: "technology",
        categoryLabel: "Technology Solutions",
        tagline: "Native and cross-platform apps users love.",
        intro:
            "Ship polished, performant mobile experiences across iOS and Android with our full-cycle mobile engineering team.",
        subServices: [
            { title: "Native iOS & Android", description: "Swift and Kotlin builds tuned for platform." },
            { title: "Cross-Platform Apps", description: "React Native and Flutter for faster delivery." },
            { title: "App Modernization", description: "Rebuilds, redesigns, and performance overhauls." },
            { title: "App Store Optimization", description: "Launch strategy and store presence management." },
        ],
        tagsLabel: "Frameworks & Tools",
        tags: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "Realm", "GraphQL", "REST", "Fastlane", "AppCenter"],
        benefits: [
            "Pixel-perfect UI aligned with brand systems.",
            "Offline-first architecture where it matters.",
            "In-app analytics and crash reporting baked in.",
            "App store submission and compliance handled.",
            "Continuous delivery pipelines from day one.",
            "24x7 monitoring and hot-fix support.",
        ],
    },
    {
        slug: "cloud-devops",
        title: "Cloud & DevOps",
        category: "technology",
        categoryLabel: "Technology Solutions",
        tagline: "Reliable infrastructure. Faster releases.",
        intro:
            "From cloud migration to platform engineering, we build resilient, cost-optimized environments that ship code faster.",
        subServices: [
            { title: "Cloud Migration", description: "Lift-shift-optimize across AWS, Azure, GCP." },
            { title: "DevOps Automation", description: "CI/CD, IaC, and self-service platforms." },
            { title: "Site Reliability", description: "SLOs, observability, and incident response." },
            { title: "Cost Optimization", description: "FinOps practices to reduce cloud spend." },
        ],
        tagsLabel: "Cloud & Tooling",
        tags: ["AWS", "Azure", "GCP", "Terraform", "Ansible", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Datadog"],
        benefits: [
            "Cloud-agnostic architecture patterns.",
            "Average 30% reduction in cloud spend.",
            "Zero-downtime migrations and deployments.",
            "24x7 NOC and incident management.",
            "Compliance-ready (ISO 27001, SOC 2).",
            "Enablement and training for your teams.",
        ],
    },
    {
        slug: "data-ai",
        title: "Data & AI Solutions",
        category: "technology",
        categoryLabel: "Technology Solutions",
        tagline: "Turn data into decisions and automation.",
        intro:
            "Modern data platforms, analytics, and AI/ML solutions that make your business measurably smarter.",
        subServices: [
            { title: "Data Engineering", description: "Warehouses, lakes, and reliable pipelines." },
            { title: "Business Intelligence", description: "Dashboards and self-serve analytics." },
            { title: "Machine Learning", description: "Predictive models and MLOps at scale." },
            { title: "Generative AI", description: "LLM apps, RAG, and workflow copilots." },
        ],
        tagsLabel: "Platforms & Frameworks",
        tags: ["Snowflake", "Databricks", "BigQuery", "dbt", "Airflow", "Power BI", "Tableau", "TensorFlow", "PyTorch", "LangChain", "OpenAI", "Hugging Face"],
        benefits: [
            "Domain-experienced data scientists and engineers.",
            "Production-grade MLOps out of the box.",
            "Governance, lineage, and data quality built-in.",
            "Rapid PoCs with clear ROI checkpoints.",
            "Secure LLM deployments with data privacy.",
            "Ongoing model monitoring and retraining.",
        ],
    },
    {
        slug: "digital-marketing",
        title: "Digital Marketing",
        category: "operations",
        categoryLabel: "Digital & Operations",
        tagline: "Growth marketing that pays for itself.",
        intro:
            "Full-funnel digital marketing — SEO, paid, content, and CRM — engineered around measurable revenue outcomes.",
        subServices: [
            { title: "Performance Marketing", description: "Paid search, social, and programmatic." },
            { title: "SEO & Content", description: "Rank-and-convert content strategies." },
            { title: "Social & Brand", description: "Community, creative, and brand ops." },
            { title: "Marketing Automation", description: "Lifecycle campaigns and CRM ops." },
        ],
        tagsLabel: "Channels & Platforms",
        tags: ["Google Ads", "Meta Ads", "LinkedIn", "SEO", "HubSpot", "Marketo", "Salesforce", "GA4", "Mixpanel", "Webflow"],
        benefits: [
            "Full-funnel strategy tied to pipeline metrics.",
            "In-house creative studio and copywriters.",
            "Transparent weekly reporting and dashboards.",
            "A/B testing and CRO built into every sprint.",
            "Attribution and MMM modelling capability.",
            "Certified specialists across major platforms.",
        ],
    },
    {
        slug: "bpo-services",
        title: "BPO & Back-Office",
        category: "operations",
        categoryLabel: "Digital & Operations",
        tagline: "Reliable, scalable process operations.",
        intro:
            "Outsource high-volume, rules-based work to a trained team backed by workflow automation and quality controls.",
        subServices: [
            { title: "Customer Support", description: "Omnichannel voice, chat, and email support." },
            { title: "Data Operations", description: "Data entry, moderation, and enrichment." },
            { title: "Finance & Accounting", description: "AP, AR, reconciliation, and reporting." },
            { title: "Document Processing", description: "Extraction, verification, and workflow." },
        ],
        tagsLabel: "Process Capabilities",
        tags: ["Voice Support", "Live Chat", "Email Support", "Data Entry", "Content Moderation", "KYC", "Invoice Processing", "Order Management", "Claims Processing", "Quality Assurance"],
        benefits: [
            "SLA-driven operations with published KPIs.",
            "Multilingual delivery centres.",
            "ISO 27001 certified information security.",
            "Workflow automation reduces cost by 30-40%.",
            "Flexible pricing: per-FTE, per-transaction, outcome-based.",
            "Real-time dashboards and QA scorecards.",
        ],
    },
    {
        slug: "training-development",
        title: "Corporate Training",
        category: "operations",
        categoryLabel: "Digital & Operations",
        tagline: "Upskilling programs with measurable outcomes.",
        intro:
            "Structured learning journeys for technical, functional, and behavioural skills — delivered online, on-site, or blended.",
        subServices: [
            { title: "Technical Training", description: "Cloud, data, AI, and modern engineering." },
            { title: "Leadership Development", description: "First-time managers to senior leadership." },
            { title: "Behavioural Skills", description: "Communication, collaboration, and DEI." },
            { title: "Certification Programs", description: "Curated paths for industry-recognised certs." },
        ],
        tagsLabel: "Popular Programs",
        tags: ["AWS Certification", "Azure Certification", "Kubernetes", "Data Science", "Agile & Scrum", "PMP", "Six Sigma", "Communication", "Design Thinking", "Cybersecurity"],
        benefits: [
            "Curriculum designed with industry practitioners.",
            "Assessment and Kirkpatrick-level evaluation.",
            "Hands-on labs and capstone projects.",
            "LMS-integrated delivery and reporting.",
            "Corporate rate cards and enterprise LMS.",
            "Post-training coaching and reinforcement.",
        ],
    },
];

export const INDUSTRIES = [
    "Banking & Financial Services",
    "Insurance",
    "Healthcare & Pharma",
    "Retail & E-Commerce",
    "Manufacturing",
    "Logistics & Supply Chain",
    "Telecommunications",
    "Energy & Utilities",
    "Education & EdTech",
    "Real Estate & Construction",
    "Government & PSU",
    "Travel & Hospitality",
];

export function getServiceBySlug(slug) {
    return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category) {
    return SERVICES.filter((s) => s.category === category);
}