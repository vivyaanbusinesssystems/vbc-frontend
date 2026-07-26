export const CATEGORIES = {
    workforce: {
        label: "Workforce & Staffing",
        description: "Reliable talent and manpower solutions for every industry."
    },
    technology: {
        label: "Technology Solutions",
        description: "Innovative software, web, and enterprise engineering."
    },
    operations: {
        label: "Digital & Operations",
        description: "Strategic marketing, consulting, and seamless BPO."
    },
};

export const SERVICES = [
    // --- WORKFORCE & STAFFING ---
    {
        slug: "recruitment-manpower",
        title: "Recruitment & Manpower Services",
        category: "workforce",
        categoryLabel: "Workforce & Staffing",
        tagline: "Connecting you with the right talent, right on time.",
        intro: "Helping businesses hire the right talent through permanent recruitment, contractual staffing, executive search, bulk hiring, campus recruitment, and talent acquisition solutions across multiple industries.",
        subServices: [
            { title: "Permanent Recruitment", description: "Source, screen, and secure full-time talent aligned with your culture." },
            { title: "Contractual Staffing", description: "Flexible, project-based professionals deployed quickly." },
            { title: "Executive Search", description: "Confidential leadership and CxO hiring for critical roles." },
            { title: "Bulk & Campus Hiring", description: "High-volume graduate and lateral recruitment drives." },
        ],
        tagsLabel: "Hiring Expertise",
        tags: ["IT Recruitment", "Non-IT Hiring", "Executive Search", "Contract-to-Hire", "Volume Hiring", "Campus Drives"],
        benefits: [
            "Access to a massive pool of vetted professionals.",
            "Fast turnaround times for critical open positions.",
            "End-to-end interview coordination and feedback.",
            "Dedicated account managers for seamless communication.",
            "High offer-to-join ratio and strict quality checks."
        ],
    },
    {
        slug: "domestic-staffing",
        title: "Domestic Staffing",
        category: "workforce",
        categoryLabel: "Workforce & Staffing",
        tagline: "Skilled professionals for every industry across India.",
        intro: "Providing skilled professionals and workforce solutions across India for IT, Non-IT, manufacturing, healthcare, retail, logistics, finance, engineering, and other industry sectors with quick turnaround and quality hiring.",
        subServices: [
            { title: "IT & Tech Staffing", description: "Developers, engineers, and tech specialists." },
            { title: "Manufacturing & Engineering", description: "Skilled personnel for production and technical roles." },
            { title: "Healthcare & Pharma", description: "Qualified staff for medical and pharmaceutical facilities." },
            { title: "Retail & Logistics", description: "Reliable workforce for supply chain and storefronts." },
        ],
        tagsLabel: "Sectors Covered",
        tags: ["Information Technology", "Manufacturing", "Healthcare", "Retail", "Logistics", "Banking & Finance", "Engineering"],
        benefits: [
            "Pan-India reach and localized talent sourcing.",
            "Fully compliant with statutory and payroll regulations.",
            "Rapid deployment of ready-to-work professionals.",
            "Flexible models for temporary and long-term needs.",
            "Strict background verification and vetting processes."
        ],
    },
    {
        slug: "blue-collar-workforce",
        title: "Blue Collar Workforce Solutions",
        category: "workforce",
        categoryLabel: "Workforce & Staffing",
        tagline: "Reliable, skilled manpower for industrial and field operations.",
        intro: "Supplying reliable and skilled blue-collar manpower including factory workers, warehouse associates, machine operators, drivers, delivery executives, security guards, housekeeping staff, electricians, plumbers, technicians, and other industrial workforce requirements.",
        subServices: [
            { title: "Manufacturing Manpower", description: "Factory workers, machine operators, and assemblers." },
            { title: "Logistics & Delivery", description: "Warehouse associates, drivers, and delivery executives." },
            { title: "Facility Management", description: "Security guards, housekeeping, and maintenance staff." },
            { title: "Technical Staff", description: "Electricians, plumbers, and specialized technicians." },
        ],
        tagsLabel: "Roles We Fulfill",
        tags: ["Factory Workers", "Machine Operators", "Warehouse Staff", "Delivery Executives", "Security Guards", "Electricians", "Plumbers"],
        benefits: [
            "Large database of verified blue-collar workers.",
            "Bulk deployment capabilities for industrial operations.",
            "Complete handling of attendance, payroll, and compliance.",
            "Focus on reliability, discipline, and workplace safety.",
            "Replacement guarantees for uninterrupted operations."
        ],
    },
    {
        slug: "hr-consulting",
        title: "HR Consulting",
        category: "workforce",
        categoryLabel: "Workforce & Staffing",
        tagline: "Strategic HR solutions to build and retain great teams.",
        intro: "Supporting organisations with HR policy development, payroll management, statutory compliance, performance management systems, employee engagement, organisational development, recruitment consulting, and workforce planning.",
        subServices: [
            { title: "Payroll & Compliance", description: "Error-free payroll processing and statutory adherence." },
            { title: "Policy Development", description: "Drafting modern, fair, and effective workplace policies." },
            { title: "Performance Management", description: "Structuring appraisals, KPIs, and reward systems." },
            { title: "Organisational Development", description: "Workforce planning and employee engagement strategies." },
        ],
        tagsLabel: "Consulting Areas",
        tags: ["Payroll Processing", "Statutory Compliance", "Performance Appraisals", "Employee Engagement", "Workforce Planning", "HR Policies"],
        benefits: [
            "Ensure 100% compliance with labor laws and regulations.",
            "Streamline HR operations to focus on core business.",
            "Improve employee retention and workplace satisfaction.",
            "Custom-designed policies matching your company culture.",
            "Scalable HR frameworks for growing startups and SMEs."
        ],
    },

    // --- TECHNOLOGY SOLUTIONS ---
    {
        slug: "it-software-development",
        title: "IT & Software Development",
        category: "technology",
        categoryLabel: "Technology Solutions",
        tagline: "Innovative engineering for your digital transformation.",
        intro: "Delivering innovative technology solutions including custom software development, enterprise applications, mobile app development, cloud solutions, CRM systems, API integration, software maintenance, and digital transformation services.",
        subServices: [
            { title: "Custom Software", description: "Tailor-made applications built for your specific workflows." },
            { title: "Mobile App Development", description: "Native and cross-platform mobile experiences." },
            { title: "Cloud & APIs", description: "Scalable cloud architectures and seamless integrations." },
            { title: "Maintenance & Support", description: "Ongoing updates, security patches, and tech support." },
        ],
        tagsLabel: "Tech Stack & Capabilities",
        tags: ["React", "Node.js", "Python", "Java", "iOS", "Android", "AWS", "Azure", "CRM Integration", "API Development"],
        benefits: [
            "Agile development methodology for faster delivery.",
            "Highly scalable, secure, and robust architectures.",
            "UI/UX-focused engineering for high user adoption.",
            "Seamless integration with your existing legacy systems.",
            "Comprehensive QA testing and post-launch support."
        ],
    },
    {
        slug: "erp-solutions",
        title: "ERP Solutions",
        category: "technology",
        categoryLabel: "Technology Solutions",
        tagline: "Streamline your business operations with powerful ERPs.",
        intro: "Offering end-to-end ERP consulting, implementation, customization, migration, integration, support, training, and maintenance to streamline business operations and improve organisational efficiency.",
        subServices: [
            { title: "ERP Implementation", description: "End-to-end deployment of enterprise resource planning systems." },
            { title: "Customization & Integration", description: "Tailoring modules to fit unique business logic." },
            { title: "Data Migration", description: "Secure transfer of legacy data to modern platforms." },
            { title: "Training & Support", description: "Onboarding teams and providing continuous technical help." },
        ],
        tagsLabel: "ERP Capabilities",
        tags: ["Consulting", "Implementation", "Custom Modules", "Data Migration", "System Integration", "User Training", "Maintenance"],
        benefits: [
            "Centralize operations across HR, finance, and supply chain.",
            "Gain real-time visibility with unified dashboards.",
            "Reduce operational costs through process automation.",
            "Ensure data accuracy and eliminate organizational silos.",
            "Scalable architecture that grows with your enterprise."
        ],
    },
    {
        slug: "web-development",
        title: "Web Development",
        category: "technology",
        categoryLabel: "Technology Solutions",
        tagline: "Scalable and secure web applications for modern businesses.",
        intro: "Designing and developing modern, responsive, secure, and scalable websites, e-commerce platforms, web portals, and custom web applications tailored to your business needs.",
        subServices: [
            { title: "E-Commerce Platforms", description: "High-conversion online stores with secure gateways." },
            { title: "Web Portals", description: "Customer, vendor, and employee self-service portals." },
            { title: "Custom Web Apps", description: "Complex, database-driven web applications." },
            { title: "CMS Development", description: "Easy-to-manage content systems like WordPress." },
        ],
        tagsLabel: "Web Technologies",
        tags: ["React.js", "Next.js", "MERN Stack", "PHP", "Shopify", "WordPress", "Web Portals", "E-Commerce"],
        benefits: [
            "Mobile-responsive designs that work flawlessly on all devices.",
            "Optimized for speed and core web vitals.",
            "Secure architectures protecting user and business data.",
            "Seamless third-party API and payment integrations.",
            "SEO-friendly structures to boost organic visibility."
        ],
    },
    {
        slug: "website-design",
        title: "Website Design",
        category: "technology",
        categoryLabel: "Technology Solutions",
        tagline: "Beautiful, responsive designs that capture your brand.",
        intro: "Creating visually appealing, user-friendly, mobile-responsive, and SEO-optimised corporate websites, business websites, landing pages, portfolio websites, and e-commerce stores that strengthen your online presence and brand identity.",
        subServices: [
            { title: "Corporate Websites", description: "Professional digital storefronts for enterprises." },
            { title: "Landing Pages", description: "High-converting single pages for marketing campaigns." },
            { title: "UI/UX Design", description: "Wireframing, prototyping, and user journey mapping." },
            { title: "Portfolio & SME Sites", description: "Sleek, modern presences for growing brands." },
        ],
        tagsLabel: "Design Focus",
        tags: ["UI/UX Design", "Wireframing", "Figma", "Responsive Design", "Corporate Identity", "Landing Pages", "Prototyping"],
        benefits: [
            "Custom designs tailored strictly to your brand guidelines.",
            "Intuitive user journeys that increase engagement.",
            "Modern aesthetics combined with fast loading speeds.",
            "Accessible designs compliant with global web standards.",
            "Conversion-focused layouts that drive lead generation."
        ],
    },

    // --- DIGITAL & OPERATIONS ---
    {
        slug: "digital-marketing",
        title: "Digital Marketing",
        category: "operations",
        categoryLabel: "Digital & Operations",
        tagline: "Strategies that drive visibility, engagement, and growth.",
        intro: "Driving business growth through Search Engine Optimization (SEO), Google Ads (PPC), Social Media Marketing, Content Marketing, Email Marketing, Online Reputation Management (ORM), Branding, and Lead Generation strategies.",
        subServices: [
            { title: "SEO & Content", description: "Rank-and-convert organic search strategies." },
            { title: "Performance Marketing (PPC)", description: "High-ROI campaigns across Google and Meta Ads." },
            { title: "Social Media & Branding", description: "Community building and visual brand identity." },
            { title: "Lead Generation", description: "Targeted funnels to capture high-quality prospects." },
        ],
        tagsLabel: "Marketing Channels",
        tags: ["SEO", "Google Ads", "Social Media", "Content Marketing", "Email Campaigns", "ORM", "Lead Gen", "Analytics"],
        benefits: [
            "Data-driven campaigns focused on measurable ROI.",
            "Increased organic traffic and brand authority.",
            "Targeted ad spend to minimize customer acquisition costs.",
            "Comprehensive monthly reporting and analytics tracking.",
            "End-to-end funnel optimization for higher conversions."
        ],
    },
    {
        slug: "bpo-services",
        title: "BPO Services",
        category: "operations",
        categoryLabel: "Digital & Operations",
        tagline: "Reliable outsourcing for seamless business processes.",
        intro: "Providing reliable business process outsourcing solutions including customer support, inbound and outbound voice processes, non-voice processes, technical support, back-office operations, data entry, chat support, and help desk services.",
        subServices: [
            { title: "Customer Support", description: "Omnichannel voice, chat, and email assistance." },
            { title: "Technical Helpdesk", description: "L1/L2 troubleshooting and IT query resolution." },
            { title: "Back-Office Operations", description: "Document processing, verification, and backend tasks." },
            { title: "Data Entry & Management", description: "Accurate, secure, and high-volume data handling." },
        ],
        tagsLabel: "BPO Capabilities",
        tags: ["Inbound Voice", "Outbound Calling", "Chat Support", "Email Support", "Data Entry", "Technical Helpdesk", "Back-Office"],
        benefits: [
            "SLA-driven operations with stringent quality checks.",
            "Scale support teams up or down based on seasonal volume.",
            "Reduce operational overhead and infrastructure costs.",
            "24/7 coverage for global customer bases.",
            "High data security and confidentiality standards."
        ],
    },
    {
        slug: "business-consulting",
        title: "Business Consulting",
        category: "operations",
        categoryLabel: "Digital & Operations",
        tagline: "Strategic guidance for sustainable and scalable growth.",
        intro: "Helping startups, SMEs, and enterprises with business strategy, company formation, operational excellence, process optimisation, market expansion, digital transformation, compliance guidance, and sustainable business growth planning.",
        subServices: [
            { title: "Strategy & Planning", description: "Roadmaps for market entry, scaling, and profitability." },
            { title: "Process Optimization", description: "Identifying bottlenecks and streamlining workflows." },
            { title: "Digital Transformation", description: "Guiding the adoption of modern technology stacks." },
            { title: "Compliance & Formation", description: "Assistance with company setups and regulatory norms." },
        ],
        tagsLabel: "Consulting Pillars",
        tags: ["Business Strategy", "Market Expansion", "Process Optimization", "Digital Transformation", "Company Formation", "SME Growth"],
        benefits: [
            "Actionable insights backed by deep industry research.",
            "Identify and eliminate operational inefficiencies.",
            "De-risk market entry and new product launches.",
            "Future-proof operations with digital roadmaps.",
            "Dedicated advisory for sustained, long-term profitability."
        ],
    }
];

export const INDUSTRIES = [
    "Information Technology (IT)",
    "Healthcare & Life Sciences",
    "Manufacturing",
    "Banking & Financial Services",
    "Retail & E-commerce",
    "Logistics & Supply Chain",
    "Automobile",
    "Pharmaceuticals",
    "Education",
    "Telecommunications",
    "Engineering",
    "FMCG",
    "Hospitality",
    "Construction",
    "Energy & Utilities"
];

export function getServiceBySlug(slug) {
    return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category) {
    return SERVICES.filter((s) => s.category === category);
}