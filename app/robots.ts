import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Applebot-Extended",
          "Google-Extended",
          "Bytespider",
          "CCBot",
          "FacebookBot",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://coderovo.com/sitemap.xml",
  };
}
