import HeroSection from "@/components/HeroSection";
import ChatInterface from "@/components/ChatInterface";
import InformationModules from "@/components/InformationModules";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Information Modules */}
      <div id="modules-section">
        <InformationModules />
      </div>
      
      {/* Chat Interface */}
      <section id="chat-section" className="py-16 px-4 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ask Your Campus AI Assistant
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question about campus life? Start a conversation with our intelligent assistant 
              for instant, accurate information about all campus services and facilities.
            </p>
          </div>
          <ChatInterface />
        </div>
      </section>
    </div>
  );
};

export default Index;
