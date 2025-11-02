import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            About Me
          </h2>
          
          <Card className="p-8 md:p-12 shadow-card border-border/50 bg-card">
            <div className="space-y-6 font-inter text-lg text-card-foreground/80 leading-relaxed">
              <p>
                With over <strong className="text-foreground">20 years of experience</strong> in IT architecture and consulting, 
                I've dedicated my career to designing and implementing enterprise-grade ITSM solutions that transform 
                how organizations manage their IT operations.
              </p>
              
              <p>
                My expertise spans across <strong className="text-foreground">BMC Remedy</strong> and <strong className="text-foreground">ServiceNow</strong> platforms, 
                where I've architected solutions for prestigious clients including the <strong className="text-foreground">National Science Foundation</strong>, 
                <strong className="text-foreground"> U.S. Census Bureau</strong>, <strong className="text-foreground">FERC</strong>, 
                <strong className="text-foreground"> TSA</strong>, and <strong className="text-foreground">Bank of America</strong>.
              </p>
              
              <p>
                What drives me is a deep curiosity about how technology can serve people better. 
                I approach each project with craftsmanship and dedication, believing that systems should be 
                efficient, reliable, and above all, designed with the end user in mind.
              </p>
              
              <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-xl text-foreground my-8">
                "I believe technology should serve people — not the other way around."
              </blockquote>
              
              <p>
                As the founder of <strong className="text-foreground">Maruthi Technologies Inc</strong>, I continue to help 
                organizations navigate the complexities of modern ITSM, bringing automation, AI-driven insights, 
                and proven architectural patterns to every engagement.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
