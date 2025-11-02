import { Card } from "@/components/ui/card";
import { Server, Zap, Shield } from "lucide-react";

const expertiseAreas = [
  {
    icon: Server,
    title: "Enterprise ITSM Architecture",
    description: "Remedy & ServiceNow implementation, CMDB design, and ITIL framework expertise for scalable IT service management.",
  },
  {
    icon: Zap,
    title: "Automation & AI Integrations",
    description: "AI-driven workflows, intelligent self-service chatbots, and smart reporting solutions that reduce manual effort.",
  },
  {
    icon: Shield,
    title: "Performance & Compliance",
    description: "Secure, scalable, and ITIL-compliant systems designed for federal agencies and enterprise clients.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Core Expertise
          </h2>
          <p className="font-inter text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Two decades of architecting solutions that bridge technology and business outcomes
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 group"
              >
                <div className="mb-6 inline-flex p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                  <area.icon className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="font-poppins text-2xl font-bold text-foreground mb-4">
                  {area.title}
                </h3>
                
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
