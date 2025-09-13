import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your campus AI assistant. How can I help you today? I can provide information about academic schedules, dining services, library resources, and more!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const simulatedResponses = {
    dining: "🍽️ **Dining Services:**\n• Main Cafeteria: 7:00 AM - 9:00 PM\n• Coffee Shop: 6:30 AM - 8:00 PM\n• Food Court: 11:00 AM - 7:00 PM\n• Pizza Corner: 4:00 PM - 11:00 PM",
    library: "📚 **Library Information:**\n• Main Library: 24/7 during exams\n• Study Rooms: Available for booking\n• Computer Lab: 8:00 AM - 10:00 PM\n• Research Help Desk: 9:00 AM - 6:00 PM",
    schedule: "📅 **Academic Schedule:**\n• Fall Semester: Aug 28 - Dec 15\n• Spring Semester: Jan 15 - May 10\n• Summer Session: May 20 - Aug 10\n• Final Exams: Last two weeks of semester",
    facilities: "🏢 **Campus Facilities:**\n• Gym: 5:00 AM - 11:00 PM\n• Pool: 6:00 AM - 10:00 PM\n• Student Center: 7:00 AM - 12:00 AM\n• Health Services: 8:00 AM - 6:00 PM",
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("dining") || message.includes("food") || message.includes("cafeteria")) {
      return simulatedResponses.dining;
    }
    if (message.includes("library") || message.includes("book") || message.includes("study")) {
      return simulatedResponses.library;
    }
    if (message.includes("schedule") || message.includes("semester") || message.includes("exam")) {
      return simulatedResponses.schedule;
    }
    if (message.includes("gym") || message.includes("pool") || message.includes("facility")) {
      return simulatedResponses.facilities;
    }
    
    return "I can help you with information about dining services, library resources, academic schedules, and campus facilities. What would you like to know more about?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto h-[600px] flex flex-col bg-gradient-to-b from-card to-secondary border-campus-blue/20 shadow-[var(--shadow-card)]">
      {/* Chat Header */}
      <div className="p-6 border-b border-campus-blue/20 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">Campus AI Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about campus!</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "bot" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-primary to-accent text-white ml-8"
                  : "bg-secondary text-secondary-foreground mr-8"
              }`}
            >
              <div className="whitespace-pre-line text-sm">{message.text}</div>
              <div
                className={`text-xs mt-1 opacity-70 ${
                  message.sender === "user" ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>

            {message.sender === "user" && (
              <div className="w-8 h-8 rounded-full bg-campus-gray flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-campus-blue/20">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about dining, library, schedules, facilities..."
            className="flex-1 border-campus-blue/20 focus:border-primary focus:ring-primary/20"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg transition-all duration-300"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;