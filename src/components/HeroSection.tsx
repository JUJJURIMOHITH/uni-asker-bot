import { Button } from "@/components/ui/button";
import { MessageCircle, Search, HelpCircle, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToModules = () => {
    const modulesSection = document.getElementById('modules-section');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/20 to-campus-teal/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Campus Assistant</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-campus-teal bg-clip-text text-transparent">
              Smart Campus
            </span>
            <br />
            <span className="text-foreground">Information System</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get instant answers to all your campus questions. From dining schedules to library resources, 
            our AI assistant makes campus life easier and more connected.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToChat}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-[var(--shadow-floating)] hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Chatting
            </Button>
            
            <Button 
              onClick={scrollToModules}
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-full transition-all duration-300 group"
            >
              <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Information
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: "24/7 AI Assistant",
                description: "Get instant answers to your campus questions anytime, anywhere"
              },
              {
                icon: Search,
                title: "Quick Information",
                description: "Access dining hours, library resources, and facility timings instantly"
              },
              {
                icon: HelpCircle,
                title: "Smart Support",
                description: "Intelligent responses for academic schedules and administrative procedures"
              }
            ].map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-campus-gray-light/30 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-card)] group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FeatureIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;