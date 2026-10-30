import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import VideoSection from "./components/VideoSection";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <VideoSection />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}
