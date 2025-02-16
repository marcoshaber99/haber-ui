import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    // Add when site is public:
    // sitemap: "https://yourdomain.com/sitemap.xml"
  };
}
