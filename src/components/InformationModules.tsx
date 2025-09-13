import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Utensils, 
  BookOpen, 
  FileText, 
  Users, 
  Building2,
  GraduationCap,
  Coffee
} from "lucide-react";

const modules = [
  {
    title: "Academic Schedules",
    description: "Class timetables, exam dates, and academic calendar",
    icon: Calendar,
    gradient: "from-primary to-primary/80",
    items: [
      "Fall 2024: Aug 28 - Dec 15",
      "Spring 2025: Jan 15 - May 10", 
      "Final Exams: Last 2 weeks",
      "Registration: Early November"
    ]
  },
  {
    title: "Facility Timings",
    description: "Operating hours for campus facilities and services",
    icon: Clock,
    gradient: "from-accent to-accent/80",
    items: [
      "Library: 24/7 during exams",
      "Gym: 5:00 AM - 11:00 PM",
      "Pool: 6:00 AM - 10:00 PM",
      "Student Center: 7:00 AM - 12:00 AM"
    ]
  },
  {
    title: "Campus Events",
    description: "Upcoming events, workshops, and activities",
    icon: Users,
    gradient: "from-campus-teal to-campus-teal/80",
    items: [
      "Orientation Week: Aug 21-25",
      "Career Fair: Oct 15-16",
      "Homecoming: Nov 8-10", 
      "Finals Week: Dec 9-15"
    ]
  },
  {
    title: "Dining Services",
    description: "Cafeterias, food courts, and meal plan information",
    icon: Utensils,
    gradient: "from-campus-gold to-campus-gold/80",
    items: [
      "Main Cafeteria: 7:00 AM - 9:00 PM",
      "Coffee Shop: 6:30 AM - 8:00 PM",
      "Food Court: 11:00 AM - 7:00 PM",
      "Late Night: Pizza Corner till 11:00 PM"
    ]
  },
  {
    title: "Library Resources",
    description: "Study spaces, research help, and digital resources",
    icon: BookOpen,
    gradient: "from-primary to-accent",
    items: [
      "Study Rooms: Available for booking",
      "Research Help: 9:00 AM - 6:00 PM",
      "Computer Lab: 8:00 AM - 10:00 PM",
      "Digital Archives: 24/7 access"
    ]
  },
  {
    title: "Administrative Procedures",
    description: "Registration, transcripts, and student services",
    icon: FileText,
    gradient: "from-campus-blue to-campus-blue/80",
    items: [
      "Registration Office: 8:00 AM - 5:00 PM",
      "Transcript Requests: Online portal",
      "Financial Aid: By appointment",
      "Student Support: Walk-in hours"
    ]
  }
];

const InformationModules = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Campus Information Hub
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick access to essential campus information and services. Click on any module to explore more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            
            return (
              <Card 
                key={index}
                className="group hover:shadow-[var(--shadow-floating)] transition-all duration-300 hover:-translate-y-2 border-campus-gray-light/50 hover:border-primary/30 cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: GraduationCap, label: "Students", value: "15,000+" },
            { icon: Building2, label: "Buildings", value: "45" },
            { icon: BookOpen, label: "Library Books", value: "500K+" },
            { icon: Coffee, label: "Dining Options", value: "12" }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-4 rounded-lg bg-gradient-to-br from-card to-secondary border border-campus-gray-light/30"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <StatIcon className="w-5 h-5 text-white" />
                </div>
                <div className="font-bold text-lg text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InformationModules;