import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://safevisionbr.com.br/sitemap.xml",
    host: "https://safevisionbr.com.br",
  };
}
