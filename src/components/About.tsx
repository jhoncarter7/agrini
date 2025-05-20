
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Agricultural engineer with 15+ years experience in sustainable farming practices.",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Former tech lead at AgriTech Solutions with expertise in IoT and data analytics.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    initials: "MC"
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Research",
    bio: "PhD in Agricultural Science specializing in crop optimization and soil health.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    initials: "ER"
  }
];

export function About() {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About AgriHub Verse</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to transform agriculture through innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg mb-6">
              At AgriHub Verse, we believe that technology can revolutionize the agricultural industry, making it more sustainable, profitable, and accessible for everyone.
            </p>
            <p className="text-lg mb-6">
              Our platform combines AI, IoT, and data analytics to provide farmers with the tools they need to optimize their operations, reduce waste, and increase yields while protecting our planet.
            </p>
            <p className="text-lg">
              Founded in 2023, we've already helped hundreds of farmers across the globe implement smart farming techniques that have transformed their businesses.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3" 
              alt="Modern Agriculture" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-agri-green text-white text-xl">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-agri-green font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                alt="Sustainable Farming" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg mb-4">
                We envision a world where farming is efficient, sustainable, and profitable for all, regardless of farm size or location.
              </p>
              <p className="text-lg mb-4">
                Through technology and education, we're working to:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Reduce water usage by 30% across our partner farms</li>
                <li>Increase crop yields by an average of 25%</li>
                <li>Cut down on pesticide use through targeted application</li>
                <li>Empower small-scale farmers with enterprise-grade tools</li>
              </ul>
              <p className="text-lg">
                Join us in creating a more sustainable future for agriculture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
