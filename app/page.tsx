import Header from "./components/Header";
import Hero from "./components/Hero";
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
      {/* vertical guide lines, like the demo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        {[20, 40, 60, 80].map((p) => (
          <span key={p} className="absolute inset-y-0 w-px bg-neutral-200" style={{ left: `${p}%` }} />
        ))}
      </div>
      <SmoothScroll />
      <CustomCursor />
      <Preloader />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Clients />
        <About />
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
