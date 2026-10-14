import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { GlobalBackground } from "@/components/ui/GlobalBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
  icons: {
    icon: [
      { url: "/images/coderovo-logo-animation-ready-exact.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/coderovo-logo-animation-ready-exact.svg",
    apple: "/images/coderovo-logo-animation-ready-exact.svg",
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
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#07090E] text-[#E2E8F0] font-sans flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300 relative w-full max-w-full overflow-x-hidden"
        suppressHydrationWarning
      >
        <GlobalBackground />
        <div className="relative z-10 flex flex-col flex-1 w-full max-w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
