import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import SmoothScroll from "./SmoothScroll";
import CustomCursor from "./CustomCursor";
import PageIntro from "./PageIntro";

/** Frame shared by the inner pages: same header, footer, cursor and smooth scroll as the home, without the loader. */
export default function PageShell({ children, footerCta = true }: { children: ReactNode; footerCta?: boolean }) {
  return (
    <div className="relative mx-auto max-w-[1920px] overflow-x-clip" style={{ ["--base" as string]: "0ms" }}>
      <PageIntro />
      <SmoothScroll instant />
      <CustomCursor />
      <Header />
      <main className="pi-page relative z-10">{children}</main>
      <Footer cta={footerCta} />
      <BackToTop />
    </div>
  );
}
