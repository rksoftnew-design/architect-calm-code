import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import VideoInsights from "@/components/VideoInsights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <VideoInsights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
