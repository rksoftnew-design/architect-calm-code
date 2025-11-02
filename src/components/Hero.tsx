import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const handleCTA = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2ek0wIDBoMjR2MjRIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Enterprise-Grade IT Solutions{" "}
            <span className="text-accent">That Work Smarter</span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            I'm <strong>Sanjay Kumar</strong> — an Architect specializing in BMC Remedy and ServiceNow, 
            helping organizations automate, optimize, and scale their IT service operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleCTA}
              className="bg-accent hover:bg-accent/90 text-white font-inter font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Let's Collaborate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-inter font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              Explore Expertise
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
