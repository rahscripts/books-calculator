import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
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
      <body className="antialiased tracking-tight">
        <Providers>
          <Toaster />
          {children}
        </Providers>

      </body>

    </html>
  );
}
