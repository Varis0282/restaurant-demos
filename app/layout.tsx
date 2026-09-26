import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant Website Demos — 5 Styles",
  description: "One restaurant, five completely different websites. WhatsApp table booking, Hindi/English, full menu, gallery and map — pick the design you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
