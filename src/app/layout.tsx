import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/components.css";
import { Header, Footer } from "@/components";
import { ConfigProvider } from "antd";
import { antdTheme } from "@/lib";
import I18nProvider from "@/components/I18nProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAXIUS - Giải pháp công nghệ hàng đầu Việt Nam",
  description:
    "MAXIUS cung cấp các giải pháp công nghệ hiện đại, đổi mới sáng tạo cho doanh nghiệp. Khám phá các tính năng ưu việt và liên hệ ngay hôm nay.",
  keywords:
    "MAXIUS, công nghệ, giải pháp, đổi mới sáng tạo, Việt Nam, startup, công nghệ mới",
  authors: [{ name: "MAXIUS Team" }],
  creator: "MAXIUS",
  publisher: "MAXIUS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://maxius.io"),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://maxius.io",
    siteName: "MAXIUS",
    title: "MAXIUS - Giải pháp công nghệ hàng đầu Việt Nam",
    description:
      "MAXIUS cung cấp các giải pháp công nghệ hiện đại, đổi mới sáng tạo cho doanh nghiệp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MAXIUS - Giải pháp công nghệ hàng đầu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAXIUS - Giải pháp công nghệ hàng đầu Việt Nam",
    description:
      "MAXIUS cung cấp các giải pháp công nghệ hiện đại, đổi mới sáng tạo cho doanh nghiệp.",
    images: ["/og-image.jpg"],
    creator: "@maxius_io",
    site: "@maxius_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "business",
  other: {
    "theme-color": "#ff8c00",
    "msapplication-TileColor": "#ff8c00",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "MAXIUS",
    "application-name": "MAXIUS",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.className}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MAXIUS",
              url: "https://maxius.io",
              logo: "https://maxius.io/logo.png",
              description:
                "MAXIUS cung cấp các giải pháp công nghệ hiện đại, đổi mới sáng tạo cho doanh nghiệp.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "VN",
                addressLocality: "Ho Chi Minh City",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-xxx-xxx-xxxx",
                contactType: "customer service",
                areaServed: "VN",
              },
              sameAs: [
                "https://facebook.com/maxius",
                "https://twitter.com/maxius_io",
                "https://linkedin.com/company/maxius",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ConfigProvider theme={antdTheme}>
          <I18nProvider>
            <Header />
            {children}
            <Footer />
          </I18nProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
