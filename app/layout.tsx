import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "Inspeção predial, vistorias técnicas e perícias com laudo assinado por engenheiro. Descubra a causa real do problema antes que vire prejuízo. Rio de Janeiro.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3100"),
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
    <html lang="pt-BR" className={`${poppins.variable} ${montserrat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
