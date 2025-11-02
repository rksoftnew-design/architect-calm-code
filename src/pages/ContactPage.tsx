import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import portraitImage from "@/assets/sanjay-kumar-portrait.jpg";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:rksoft@hotmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your message is ready to send!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Build Something Intelligent
            </h1>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              Whether you're exploring AI Agents or modernizing IT operations, I'd love to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[1fr,400px] gap-12">
              {/* Contact Form */}
              <Card className="p-8 md:p-12 shadow-card border-border/50 bg-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-inter font-semibold text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-inter font-semibold text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="font-inter font-semibold text-foreground">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-inter font-semibold text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[150px]"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-inter font-semibold py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Sidebar with Photo and Contact Info */}
              <div className="space-y-8">
                {/* Portrait */}
                <Card className="p-6 shadow-card border-border/50 bg-card">
                  <div className="flex justify-center mb-6">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-elegant">
                      <img 
                        src={portraitImage} 
                        alt="Sanjay Kumar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="font-poppins text-2xl font-bold text-center text-foreground mb-2">
                    Sanjay Kumar
                  </h3>
                  <p className="font-inter text-center text-muted-foreground">
                    Senior Application Architect
                  </p>
                </Card>

                {/* Contact Details */}
                <Card className="p-6 shadow-card border-border/50 bg-card space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-foreground mb-1">Email</p>
                      <a 
                        href="mailto:rksoft@hotmail.com" 
                        className="font-inter text-muted-foreground hover:text-primary transition-colors"
                      >
                        rksoft@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-foreground mb-1">Location</p>
                      <p className="font-inter text-muted-foreground">Glen Allen, VA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-foreground mb-1">LinkedIn</p>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-muted-foreground hover:text-primary transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
