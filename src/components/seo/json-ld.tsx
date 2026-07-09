import { siteConfig, socialLinks } from "@/lib/data";
import { siteUrl } from "@/lib/site-url";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.title,
        description: siteConfig.tagline,
        email: siteConfig.email,
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location,
        },
        sameAs: socialLinks.map((link) => link.url),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.tagline,
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/about#profile`,
        url: `${siteUrl}/about`,
        name: `About ${siteConfig.name}`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
