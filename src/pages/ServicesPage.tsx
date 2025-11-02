import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cpu, Database, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "Discover where automation can create real ROI. I help you identify high-impact opportunities for AI integration across your ITSM and business operations.",
      features: [
        "AI readiness assessment",
        "ROI analysis & use case identification",
        "Strategic roadmap development",
        "Technology stack recommendations"
      ]
    },
    {
      icon: Cpu,
      title: "AI Agent Implementation",
      description: "Deploy intelligent agents for ITSM, marketing, or eCommerce. From design to deployment, I build AI solutions that integrate seamlessly with your existing systems.",
      features: [
        "Custom AI agent development",
        "Multi-channel deployment",
        "Integration with existing platforms",
        "Performance monitoring & optimization"
      ]
    },
    {
      icon: Settings,
      title: "Remedy & ServiceNow Architecture",
      description: "Build scalable, secure, and optimized systems. Leverage my 20+ years of experience architecting enterprise-grade ITSM solutions for Fortune 500 and government clients.",
      features: [
        "Enterprise architecture design",
        "Platform migration & upgrades",
        "ITIL-compliant implementations",
        "Custom workflow automation"
      ]
    },
    {
      icon: Database,
      title: "Data & CMDB Optimization",
      description: "Align configuration data with business objectives. Transform your CMDB from a data repository into a strategic asset that powers intelligent decision-making.",
      features: [
        "CMDB health assessments",
        "Data quality improvement",
        "Asset relationship mapping",
        "Automation & integration"
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
              Services
            </h1>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              Comprehensive consulting and implementation services to transform your IT operations 
              with AI-powered automation and intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 shadow-card border-border/50 bg-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Title & Description */}
                <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                  {service.title}
                </h2>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span className="font-inter text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center pt-4">
                  <Link to="/contact">
                    <Button 
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-inter font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Let's discuss how AI-driven solutions can deliver measurable results for your organization.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-inter font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
