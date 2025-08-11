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
  title:
    "Reza Heydari — Software Engineer & AI-Powered Product Developer | 1× Exit",
  description:
    "Full-stack Software Engineer specializing in AI-powered applications and products. Proven track record with 1× Exit through successful acquisition. Expert in React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, LangChain, RAG, and automation workflows.",
  keywords:
    "Reza Heydari, Software Engineer, AI-powered products, AI Engineer, Full-stack developer, React developer, Next.js, Node.js developer, NestJS, MongoDB, PostgreSQL, LangChain, RAG, LangGraph, automation developer, web developer portfolio, AI applications, software engineer with exit, product developer",
  authors: { name: "Reza Heydari" },
  robots: "index, follow",
  openGraph: {
    title:
      "Reza Heydari — Software Engineer & AI-Powered Product Developer | 1× Exit",
    description:
      "Full-stack Software Engineer specializing in AI-powered applications and products. Proven track record with 1× Exit through successful acquisition. Expert in React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, LangChain, RAG, and automation workflows.",
    type: "website",
  },
  twitter: {
    title:
      "Reza Heydari — Software Engineer & AI-Powered Product Developer | 1× Exit",
    description:
      "Full-stack Software Engineer specializing in AI-powered applications and products. Proven track record with 1× Exit through successful acquisition. Expert in React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, LangChain, RAG, and automation workflows.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Reza Heydari",
    alternateName: "رضا حیدری",
    jobTitle: "Software Engineer & AI-Powered Product Developer",
    description:
      "Full-stack Software Engineer specializing in AI-powered applications and products. 1× Exit with successful acquisition.",
    //url: "https://rezapersonalwebsite.com",
    //image: "https://rezapersonalwebsite.com/profile.jpg",
    sameAs: [
      "https://www.linkedin.com/in/reza-heydarii/",
      "https://github.com/RezaHeydarii",
      "https://x.com/ReZaHeydari_dev",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "LangChain",
      "RAG",
      "LangGraph",
      "n8n",
      "AI-powered applications",
      "Full-stack development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "OneCliq (acquired by Dig Insights)",
      url: "https://www.diginsights.com/",
    },
    alumniOf: {
      "@type": "Organization",
      name: "OneCliq",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      skills: [
        "Full-stack development",
        "AI-powered applications",
        "Frontend engineering",
        "Backend development",
        "Automation workflows",
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLD).replace(/</g, "\\u003c"),
          }}
          async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
