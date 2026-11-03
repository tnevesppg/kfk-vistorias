import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const sans = Bai_Jamjuree({
  variable: "--font-sans-main",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "Inspeção predial, vistorias técnicas e perícias com laudo assinado por engenheiro. Descubra a causa real do problema antes que vire prejuízo. Rio de Janeiro.";

export const metadata: Metadata = {
  // absolute base for the share image and canonical URLs; the production build has no .env, so it needs a real default
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.NODE_ENV === "production" ? "https://kfkvistorias.electricsheep.com.br" : "http://localhost:3100"),
  ),
  title: "KFK Vistorias & Perícias",
  description,
  openGraph: {
    title: "KFK Vistorias & Perícias | Laudos precisos",
    description,
    siteName: "KFK Vistorias & Perícias",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KFK Vistorias & Perícias | Laudos precisos",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sans.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* the loader is for the first visit of a session only: mark returning visits before first paint */}
        <script dangerouslySetInnerHTML={{ __html: 'try{if(sessionStorage.getItem("kfk-intro"))document.documentElement.dataset.seen="1"}catch(e){}' }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
