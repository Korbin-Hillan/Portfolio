import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import StructuredData from "../components/structured-data";
import SkipNavigation from "../components/skip-navigation";
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
  title: "Korbin Hillan | Software Engineer",
  description: "Full-Stack Software Engineering student at Arizona State University specializing in React, Next.js, and modern web technologies. View my portfolio of web applications, mobile apps, and technical projects.",
  keywords: ["Software Engineer", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "ASU", "Portfolio"],
  authors: [{ name: "Korbin Hillan" }],
  creator: "Korbin Hillan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://korbinhillan.com",
    title: "Korbin Hillan | Software Engineer",
    description: "Full-Stack Software Engineering student at Arizona State University specializing in React, Next.js, and modern web technologies.",
    siteName: "Korbin Hillan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korbin Hillan | Software Engineer",
    description: "Full-Stack Software Engineering student at Arizona State University specializing in React, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="person" />
        <StructuredData type="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SkipNavigation />
        {children}
      </body>
    </html>
  );
}
