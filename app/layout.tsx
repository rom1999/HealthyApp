import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نُوا | قالب مدرن Next.js",
  description: "قالب اولیه فارسی با Next.js، Tailwind CSS و TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
