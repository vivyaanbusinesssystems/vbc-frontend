import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, url }) {
    const siteName = "Vivyaan Business Systems Pvt. Ltd.";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDesc = "Enterprise-grade manpower, technology, and operations services delivered by Vivyaan Business Systems. Trusted B2B partner across industries.";
    const finalDesc = description || defaultDesc;
    const siteUrl = url || "https://www.vivyaanbusinesssystems.com";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={finalDesc} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDesc} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={finalDesc} />
        </Helmet>
    );
}