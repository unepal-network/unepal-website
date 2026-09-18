import type { Metadata } from "next";
import { Noto_Sans, Urbanist } from "next/font/google";
import "./globals.css";
import "./design-system.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "uNepal - Hamro Social Network for Nepalese everywhere",
  description: "uNepal is Hamro Social Network for Nepalese everywhere - bringing posts, groups, pages, Bazaar, Hamro TV, events, business discovery, messaging, and local community updates into one app.",
  keywords: "Nepalese community app, Nepalese social network, Nepalese housing, Nepalese rentals, Nepalese jobs app, Nepalese marketplace, Nepalese events, Hamro TV, business directory, uNepal",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/assets/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en",
    title: "uNepal - Hamro Social Network for Nepalese everywhere",
    description: "Posts, groups, pages, Bazaar, Hamro TV, events, business discovery, messaging, and local community updates for Nepalese communities.",
    url: "https://www.unepal.com/",
    siteName: "uNepal",
    images: [
      {
        url: "https://www.unepal.com/assets/hero-mockup.jpg",
        width: 1200,
        height: 630,
        alt: "uNepal app marketing preview for posts, groups, Bazaar, Hamro TV, events, and business discovery",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "uNepal - Hamro Social Network for Nepalese everywhere",
    description: "Posts, groups, pages, Bazaar, Hamro TV, events, business discovery, messaging, and local community updates for Nepalese communities.",
    images: ["https://www.unepal.com/assets/hero-mockup.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${urbanist.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
