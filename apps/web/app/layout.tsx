import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading"
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Facebook Tracking",
  description: "Dashboard tactical theo doi fanpage doi thu va canh bao van hanh."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${sora.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
