import { Card } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    organization: "National Science Foundation (NSF)",
    role: "ServiceNow Subject Matter Expert",
    period: "Recent Engagement",
    highlights: [
      "Led ServiceNow implementation and optimization",
      "Designed CMDB architecture for federal compliance",
      "Implemented AI-driven service automation"
    ]
  },
  {
    organization: "U.S. Census Bureau",
    role: "BMC Remedy Architect",
    period: "Multi-year Engagement",
    highlights: [
      "Architected enterprise-wide Remedy ITSM solution",
      "Managed complex CMDB integrations",
      "Ensured ITIL compliance across all modules"
    ]
  },
  {
    organization: "FERC • Charter • Bank of America • TSA",
    role: "Senior ITSM Consultant & Architect",
    period: "Various Engagements",
    highlights: [
      "Delivered scalable ITSM solutions across industries",
      "Implemented automation and workflow optimizations",
      "Provided technical leadership and mentorship"
    ]
  },
  {
    organization: "Maruthi Technologies Inc",
    role: "Founder & Principal Consultant",
    period: "Ongoing",
    highlights: [
      "Leading ITSM consulting practice",
      "Specializing in Remedy and ServiceNow solutions",
      "Serving enterprise and government clients"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Professional Journey
          </h2>
          <p className="font-inter text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Trusted by leading organizations across government and enterprise sectors
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-card transition-all duration-300 border-l-4 border-l-accent bg-card border-border/50"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <Building2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <h3 className="font-poppins text-2xl font-bold text-foreground">
                        {exp.organization}
                      </h3>
                    </div>
                    <p className="font-inter text-lg text-primary font-semibold ml-9">
                      {exp.role}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground ml-9 md:ml-0">
                    <Calendar className="h-4 w-4" />
                    <span className="font-inter text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 ml-9">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-inter text-muted-foreground">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
