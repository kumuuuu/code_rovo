import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coderovo — Your Technology Team, Beyond Borders",
  description:
    "Coderovo helps businesses build, scale, and maintain digital solutions through flexible software engineering teams and reliable IT expertise.",
  keywords: [
    "Coderovo",
    "Software Development",
    "Dedicated Development Teams",
    "Team Extension",
    "UI/UX Engineering",
    "Cloud & DevOps",
    "Offshore Engineering",
    "Enterprise Solutions",
  ],
  authors: [{ name: "Coderovo Technologies" }],
  openGraph: {
    title: "Coderovo — Your Technology Team, Beyond Borders",
    description:
      "Coderovo helps businesses build, scale, and maintain digital solutions through flexible software engineering teams and reliable IT expertise.",
    url: "https://coderovo.com",
    siteName: "Coderovo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coderovo — Your Technology Team, Beyond Borders",
    description:
      "Coderovo helps businesses build, scale, and maintain digital solutions through flexible software engineering teams and reliable IT expertise.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark antialiased`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#07090E] text-[#E2E8F0] font-sans flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
