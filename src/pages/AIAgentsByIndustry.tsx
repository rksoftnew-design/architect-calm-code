import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Landmark, Banknote, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const AIAgentsByIndustry = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "eCommerce",
      description: "Automate product recommendations, streamline customer support, and optimize marketing through intelligent agents that learn from customer behavior.",
      benefits: [
        "AI-powered product recommendations",
        "24/7 intelligent customer support",
        "Dynamic pricing optimization",
        "Automated inventory management"
      ]
    },
    {
      icon: Landmark,
      title: "Government & Public Sector",
      description: "Enhance service efficiency, data management, and citizen communication using AI Agents built on secure, compliant platforms like ServiceNow and Remedy.",
      benefits: [
        "Secure, compliant AI solutions",
        "Streamlined citizen services",
        "Automated case management",
        "Enhanced data governance"
      ]
    },
    {
      icon: Banknote,
      title: "Banking & Financial Services",
      description: "Drive faster resolutions, ensure compliance, and personalize customer experiences with AI-enabled ITSM workflows.",
      benefits: [
        "Intelligent fraud detection",
        "Automated compliance monitoring",
        "Personalized banking experiences",
        "Rapid incident resolution"
      ]
    },
    {
      icon: Radio,
      title: "Telecommunications & Utilities",
      description: "Leverage predictive maintenance, service automation, and performance analytics powered by AI Agents to boost reliability and satisfaction.",
      benefits: [
        "Predictive maintenance alerts",
        "Automated service provisioning",
        "Network performance optimization",
        "Proactive outage prevention"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-5xl md:text-6xl font-bold text-foreground mb-6">
              AI Agents by Industry
            </h1>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              Discover how intelligent automation transforms operations across different sectors, 
              delivering measurable results and competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="p-8 md:p-12 shadow-card border-border/50 bg-card hover:shadow-elegant transition-all duration-300"
              >
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <industry.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {industry.title}
                    </h2>
                    <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {industry.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="font-inter text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
              Looking to explore how AI fits your industry?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Let's design a solution together that transforms your operations and delivers real results.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-inter font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAgentsByIndustry;
