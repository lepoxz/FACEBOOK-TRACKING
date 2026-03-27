import type { Metadata } from "next";
import { Be_Vietnam_Pro, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const beVietnamProHeading = Be_Vietnam_Pro({
  subsets: ["latin-ext", "vietnamese"],
  weight: ["600", "700"],
  variable: "--font-heading"
});

const beVietnamProBody = Be_Vietnam_Pro({
  subsets: ["latin-ext", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin-ext", "vietnamese"],
  weight: ["500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Theo Dõi Facebook",
  description: "Bảng điều khiển theo dõi fanpage đối thủ và cảnh báo vận hành."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${beVietnamProHeading.variable} ${beVietnamProBody.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
