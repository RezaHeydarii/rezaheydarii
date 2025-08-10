import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reza Heydari | Software Engineer - AI Engineer",
  description:
    "Experienced Frontend Engineer with 6+ years in React, Next.js, React Native. Specializing in AI-driven applications, Node.js backend, and scalable web solutions.",
  keywords:
    "Frontend Engineer, React Developer, Next.js, React Native, TypeScript, AI Engineering, Node.js, NestJS, Web Developer, Mobile Developer",
  authors: { name: "Reza Heydari" },
  robots: "index, follow",
  openGraph: {
    title: "Reza Heydari | Software Engineer & AI engineer",
    description:
      "Experienced Frontend Engineer with 6+ years in React, Next.js, React Native. Specializing in AI-driven applications and scalable web solutions.",
    type: "website",
  },
  twitter: {
    title: "Reza Heydari | Software Engineer & AI engineer",
    description:
      "Experienced Frontend Engineer with 6+ years in React, Next.js, React Native. Specializing in AI-driven applications and scalable web solutions.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
