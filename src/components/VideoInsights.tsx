import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoInsights = () => {
  const videoUrl = "https://www.youtube.com/watch?v=LPPUIFz29uc";
  const videoEmbedUrl = "https://www.youtube.com/embed/LPPUIFz29uc";

  return (
    <section id="video-insights" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Insights from My Latest Video
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Portrait photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant border-4 border-accent/20">
                  {/* Placeholder for professional portrait */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-6xl font-poppins font-bold text-primary">SK</span>
                      </div>
                      <p className="font-inter text-sm text-muted-foreground">
                        Professional portrait placeholder
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <h3 className="font-poppins text-3xl font-bold text-primary">
                Why this matters for your eCommerce & ITSM strategy
              </h3>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                In this video I walk you through how AI-driven agents can revolutionize service 
                operations and customer experience in enterprise and eCommerce settings. If you're 
                ready to explore smarter automation and scalable systems, this is your first step.
              </p>
              
              <div className="pt-4">
                <Button 
                  size="lg"
                  onClick={() => window.open(videoUrl, '_blank')}
                  className="bg-primary hover:bg-primary/90 text-white font-inter font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Video & Get Started
                </Button>
              </div>
            </div>
          </div>
          
          {/* Video embed section */}
          <div className="mt-16">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoInsights;
