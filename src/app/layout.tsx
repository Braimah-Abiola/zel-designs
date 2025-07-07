import Footer from "@/sections/footer";
import Navigation from "@/sections/navigation";
import type { Metadata } from "next";
import { Anton_SC, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton_SC({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baseUrl = "https://www.zeldesigns.com";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`),
  keywords: [
    "UI/UX design",
    "Web design",
    "Interactive websites",
    "Web animations",
  ],
  title: "Zel Designs — Freelance Designer",
  description:
    "I focus on problem-solving through design, crafting intuitive web and mobile experiences across SaaS, fintech, and any niche that demands efficiency and innovation",
  openGraph: {
    title: "Zel Designs — Freelance Designer",
    siteName: "Zel Designs",
    description:
      "I focus on problem-solving through design, crafting intuitive web and mobile experiences across SaaS, fintech, and any niche that demands efficiency and innovation",
    images: ["/assets/thumbnail.png"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zel Designs — Freelance Designer",
    description:
      "I focus on problem-solving through design, crafting intuitive web and mobile experiences across SaaS, fintech, and any niche that demands efficiency and innovation",
    images: ["/assets/thumbnail.png"],
    creator: "@zeldesigns",
  },
  icons: "/favicon.ico",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${inter.variable} antialiased font-inter select-none overflow-x-hidden`}
      >
        <Navigation />
        <main className=" min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
