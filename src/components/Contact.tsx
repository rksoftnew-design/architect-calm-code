import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2ek0wIDBoMjR2MjRIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="font-inter text-xl text-white/90 max-w-2xl mx-auto">
            Ready to discuss your next ITSM transformation? I'd love to hear about your challenges and explore how we can create solutions that truly work.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto p-8 md:p-12 bg-white/10 backdrop-blur-lg border-white/20">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="p-3 bg-accent rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-inter text-sm text-white/70 mb-1">Email</p>
                <a 
                  href="mailto:rksoft@hotmail.com" 
                  className="font-inter text-lg font-semibold text-white hover:text-accent transition-colors"
                >
                  rksoft@hotmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="p-3 bg-accent rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-inter text-sm text-white/70 mb-1">Location</p>
                <p className="font-inter text-lg font-semibold text-white">Glen Allen, VA</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="p-3 bg-accent rounded-lg">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-inter text-sm text-white/70 mb-1">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/sanjaykumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-inter text-lg font-semibold text-white hover:text-accent transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            
            <div className="pt-6">
              <Button 
                size="lg"
                onClick={() => window.location.href = 'mailto:rksoft@hotmail.com'}
                className="w-full bg-accent hover:bg-accent/90 text-white font-inter font-semibold text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
