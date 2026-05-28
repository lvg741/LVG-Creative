import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LVG Creative | Video, Editing & Social Media Content",
  description: "LVG Creative offers video production, video editing and social media content for ambitious brands.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
