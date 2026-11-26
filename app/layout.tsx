import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { BRAND, SITE_URL, empresaLd } from "@/lib/seo";

const sans = Bai_Jamjuree({
  variable: "--font-sans-main",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // absolute base for share images and canonical URLs (lib/seo.ts: NEXT_PUBLIC_SITE_URL, else the current host)
  metadataBase: new URL(SITE_URL),
  title: { default: BRAND, template: `%s | ${BRAND}` },
  applicationName: BRAND,
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sans.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* the loader is for the first visit of a session only: mark returning visits before first paint */}
        <script dangerouslySetInnerHTML={{ __html: 'try{if(sessionStorage.getItem("kfk-intro"))document.documentElement.dataset.seen="1"}catch(e){}' }} />
      </head>
      <body>
        <JsonLd data={empresaLd()} />
        {children}
      </body>
    </html>
  );
}
