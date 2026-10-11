import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface LogoItem {
  id: string;
  name: string;
  src: string;
  fileName: string;
}

const NAME_OVERRIDES: Record<string, string> = {
  "react": "React",
  "docker": "Docker",
  "docker icon": "Docker",
  "java programming language": "Java",
  "java programming language icon": "Java",
  "jwt": "JWT",
  "jwt seeklogo": "JWT",
  "keycloak": "Keycloak",
  "keycloak seeklogo": "Keycloak",
  "mongodb": "MongoDB",
  "mongodb seeklogo": "MongoDB",
  "mysql": "MySQL",
  "mysql icon": "MySQL",
  "next js": "Next.js",
  "node js": "Node.js",
  "node js icon": "Node.js",
  "spring boot": "Spring Boot",
  "spring boot icon": "Spring Boot",
};

function formatLogoName(fileName: string): string {
  const baseName = path.parse(fileName).name.toLowerCase();
  if (NAME_OVERRIDES[baseName]) {
    return NAME_OVERRIDES[baseName];
  }

  // Clean common suffixes and punctuation
  const cleaned = baseName
    .replace(/[-_]/g, " ")
    .replace(/\b(seeklogo|icon|logo|official)\b/gi, "")
    .trim();

  if (NAME_OVERRIDES[cleaned]) {
    return NAME_OVERRIDES[cleaned];
  }

  // Capitalize words nicely
  return cleaned
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function GET() {
  try {
    const logosDir = path.join(process.cwd(), "public", "Logos");

    if (!fs.existsSync(logosDir)) {
      return NextResponse.json({ logos: [] });
    }

    const files = await fs.promises.readdir(logosDir);
    const validExtensions = new Set([".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif", ".avif"]);

    const logos: LogoItem[] = files
      .filter((file) => validExtensions.has(path.extname(file).toLowerCase()))
      .map((file) => ({
        id: path.parse(file).name,
        name: formatLogoName(file),
        src: `/Logos/${file}`,
        fileName: file,
      }));

    return NextResponse.json({ logos }, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("Failed to read logos directory:", error);
    return NextResponse.json({ error: "Failed to read logos", logos: [] }, { status: 500 });
  }
}
