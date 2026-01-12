import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import Script from "next/script";


export const metadata: Metadata = {
  title: "booksofme",
  description: "Showcase your reading journey.",
  metadataBase: new URL("https://booksofme.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVSX381XME"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NVSX381XME');
    `}
        </Script>
      </head>

      <body className="antialiased tracking-tight">
        <Providers>
          <Toaster />
          {children}
        </Providers>

      </body>

    </html>
  );
}
