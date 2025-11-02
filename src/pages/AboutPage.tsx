import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Target, Users, Lightbulb } from "lucide-react";
import portraitImage from "@/assets/sanjay-kumar-portrait.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence in Execution",
      description: "Delivering precise, reliable, and scalable solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Human-Centered Technology",
      description: "Building systems that serve people, not the other way around."
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Staying ahead with cutting-edge AI and automation technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Portrait with Blue Glow */}
              <div className="flex justify-center animate-fade-in">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elegant border-4 border-accent/30">
                    <img 
                      src={portraitImage} 
                      alt="Sanjay Kumar – Senior Application Architect & AI-Driven ITSM Consultant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Blue glow effect */}
                  <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl -z-10"></div>
                  <div className="absolute -inset-2 bg-primary/30 rounded-2xl blur-xl -z-10"></div>
                </div>
              </div>

              {/* Content */}
              <div className="animate-fade-in">
                <h1 className="font-poppins text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Meet Sanjay Kumar
                </h1>
                <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
                  <p>
                    With over <strong className="text-foreground">two decades of experience</strong> architecting 
                    enterprise-scale IT systems, I've worked with organizations like the{" "}
                    <strong className="text-foreground">National Science Foundation</strong>,{" "}
                    <strong className="text-foreground">U.S. Census Bureau</strong>,{" "}
                    <strong className="text-foreground">Federal Energy Regulatory Commission</strong>, and{" "}
                    <strong className="text-foreground">Bank of America</strong>.
                  </p>
                  <p>
                    My mission is to help businesses adopt <strong className="text-foreground">AI-powered automation</strong> in 
                    ITSM, customer engagement, and eCommerce to achieve measurable efficiency and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
              Core Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-card"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Learn More?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Download my complete professional profile to see my full experience and credentials.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-inter font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Full Profile
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
