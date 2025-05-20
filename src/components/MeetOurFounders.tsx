
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const founders = [
  {
    name: "Aman Pratap Singh",
    role: "CEO & Founder",
    bio: "With a background in Mechanical Engineering and growing up in a farming family, Aman brings deep agricultural knowledge and supply chain expertise to Agriniri. His passion for combining technology with traditional farming practices has been the driving force behind our innovative approach to solving agricultural challenges.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    initials: "APS",
    achievements: [
      { icon: GraduationCap, text: "Mechanical Engineering Graduate" },
      { icon: Briefcase, text: "Supply Chain Development Expert" },
      { icon: Award, text: "Agricultural Innovation Leader" }
    ]
  },
  {
    name: "Kshtiz Pratap Singh",
    role: "Co-founder",
    bio: "Kshtiz plays a complementary role in the Agriniri vision, focusing on operational excellence and scale. His dedication to streamlining processes and building sustainable systems has been crucial in transforming our ideas into real-world solutions that benefit both farmers and retailers across tier 2 and tier 3 cities.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    initials: "KPS",
    achievements: [
      { icon: Briefcase, text: "Operations Strategy Specialist" },
      { icon: Award, text: "Logistics Optimization Expert" },
      { icon: GraduationCap, text: "Business Management Professional" }
    ]
  }
];

export function MeetOurFounders() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionaries behind Agriniri's mission to transform the agricultural supply chain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {founders.map((founder, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 bg-gradient-to-br from-agri-green/90 to-agri-brown/90 p-6 flex flex-col justify-center items-center text-white">
                    <Avatar className="w-32 h-32 border-4 border-white mb-4">
                      <AvatarImage src={founder.image} alt={founder.name} />
                      <AvatarFallback className="bg-agri-green text-white text-2xl">
                        {founder.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-white/90 font-medium mb-4">{founder.role}</p>
                    
                    <div className="space-y-2">
                      {founder.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <achievement.icon className="h-4 w-4" />
                          <span className="text-sm">{achievement.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-6 md:p-8">
                    <p className="text-gray-700 leading-relaxed">{founder.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
