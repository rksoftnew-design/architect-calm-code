import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, Building2, Landmark, Banknote, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import portraitImage from "@/assets/sanjay-kumar-portrait.jpg";

const Home = () => {
  const handleCTA = () => {
    window.location.href = "/contact";
  };

  const videoUrl = "https://www.youtube.com/watch?v=LPPUIFz29uc";
  const videoEmbedUrl = "https://www.youtube.com/embed/LPPUIFz29uc";

  const industries = [
    { name: "eCommerce", icon: Building2, color: "text-accent" },
    { name: "Government & Public Sector", icon: Landmark, color: "text-primary" },
    { name: "Banking & Financial Services", icon: Banknote, color: "text-accent" },
    { name: "Telecommunications & Utilities", icon: Radio, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2ek0wIDBoMjR2MjRIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left: Text Content */}
            <div className="animate-fade-in">
              <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Empowering Businesses with{" "}
                <span className="text-accent">AI-Driven IT Solutions</span>
              </h1>
              
              <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                I'm <strong>Sanjay Kumar</strong> — Architecting intelligent IT systems and AI Agents 
                that simplify, automate, and scale operations.
              </p>
              
              <Button 
                size="lg" 
                onClick={handleCTA}
                className="bg-accent hover:bg-accent/90 text-white font-inter font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's Build Smarter Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right: Portrait Image */}
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant border-4 border-white/20">
                  <img 
                    src={portraitImage} 
                    alt="Sanjay Kumar – Senior Application Architect & AI-Driven ITSM Consultant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Insight Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Featured Insight
            </h2>
            <p className="font-inter text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Discover how AI-driven agents can revolutionize service operations and customer experience 
              in enterprise and eCommerce settings.
            </p>
            
            <Card className="overflow-hidden shadow-card border-border/50">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoEmbedUrl}
                  title="AI-Driven ITSM Insights by Sanjay Kumar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <Button 
                size="lg"
                onClick={() => window.open(videoUrl, '_blank')}
                className="bg-primary hover:bg-primary/90 text-white font-inter font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Full Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries I Serve Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Industries I Serve
            </h2>
            <p className="font-inter text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
              Bringing AI-powered automation and intelligent systems to organizations across multiple sectors.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer border-border/50 bg-card"
                >
                  <industry.icon className={`h-12 w-12 ${industry.color} mb-4`} />
                  <h3 className="font-poppins text-lg font-bold text-foreground mb-2">
                    {industry.name}
                  </h3>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/ai-agents">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-inter font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
                >
                  Explore AI Agents by Industry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
