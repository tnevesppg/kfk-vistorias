import Header from "./components/Header";
import Hero from "./components/Hero";
import OpeningScene from "./components/OpeningScene";
import Clients from "./components/Clients";
import About from "./components/About";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Stats from "./components/Stats";
import VideoSection from "./components/VideoSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-[1920px] overflow-x-clip">
      {/* the opening line: a one-screen sticky layer behind everything, turned by OpeningScene while the page scrolls.
          It comes first so the guide lines below paint over it. */}
      <div aria-hidden data-opening-line className="pointer-events-none absolute left-0 top-0 z-0 w-full" style={{ height: "160svh" }}>
        <div className="opening-line sticky top-0 h-[100svh] w-full" />
      </div>
      {/* vertical guide lines, like the demo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        {[20, 40, 60, 80].map((p) => (
          <span key={p} className="absolute inset-y-0 w-px bg-neutral-200" style={{ left: `${p}%` }} />
        ))}
      </div>
      <SmoothScroll />
      <CustomCursor />
      <Preloader />
      <Header band />
      {/* desktop: the menu band is its own layer (so the line can show through it, behind the menu text) */}
      <div
        aria-hidden
        data-opening-band
        className="paper pointer-events-none absolute inset-x-0 top-0 z-[15] hidden overflow-hidden border-b border-neutral-200 lg:block"
        style={{ height: "var(--header-h)" }}
      >
        <div data-opening-band-line className="opening-line absolute left-0 top-0 h-[100svh] w-full will-change-transform" />
      </div>
      <OpeningScene />
      <main className="relative z-10">
        <Hero />
        {/* the block revealed by the line */}
        <div data-opening-mask>
          <Clients />
          <About />
        </div>
        <Services />
        <Benefits />
        <Stats />
        <VideoSection />
        <Faq />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
