import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const areas = [
    { 
      name: "Family-Focused Living",
      description: "Find top-rated schools, safe neighborhoods, and family-friendly activities - perfect for growing families looking for their ideal community."
    },
    { 
      name: "Investment Potential",
      description: "Navigate Nashville's strong real estate market with data-driven insights on property appreciation and rental opportunities."
    },
    { 
      name: "Lifestyle Match",
      description: "Match your lifestyle with the perfect location - whether you need quick commute access or prefer peaceful suburban living."
    },
    { 
      name: "Custom Roadmap",
      description: "Get a personalized plan for your home transition, from market timing to financing options and moving logistics."
    },
    { 
      name: "Market Advantage",
      description: "Leverage Nashville's robust job market and affordable cost of living to make a smart, long-term investment in your future."
    }
  ];

  const features = [
    { title: "Local Expertise", description: "Deep knowledge of North Nashville markets" },
    { title: "Personal Touch", description: "Tailored service for every client" },
    { title: "Market Insight", description: "Real-time data and trend analysis" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3')] 
          bg-cover bg-center"
          style={{ filter: 'brightness(0.7)' }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Gateway to North Nashville Living
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover your perfect home in Nashville's most sought-after northern communities
          </p>
          <Button 
            className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 text-lg px-8 py-6"
          >
            Explore Properties
          </Button>
        </div>
      </section>

      {/* About Agent Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Meet Your Agent</h2>
              <p className="text-xl text-muted-foreground">
                Chelsea Bobbitt is your dedicated real estate expert in North Nashville, bringing deep local knowledge and personalized service to every client.
              </p>
              <p className="text-muted-foreground">
                With extensive experience in the North Nashville market, Chelsea specializes in helping families find their perfect homes in Hendersonville, Gallatin, White House, Green Briar, and Goodlettsville.
              </p>
              <Button className="bg-primary text-white">Connect with Chelsea</Button>
            </div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/msgsndr/LXrM89iHSYvGb27k35cG/media/67a76467fc76858d0e110fef.png"
                alt="Chelsea Bobbitt - Lead Real Estate Agent"
                className="rounded-lg shadow-xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Your Path to the Perfect Home</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Whether you're prioritizing schools for your children, seeking investment opportunities, or looking for the perfect lifestyle match, we'll help you make the right choice for your family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <Card 
                key={area.name}
                className="p-6 hover-lift cursor-pointer bg-white"
              >
                <h3 className="text-2xl font-semibold mb-3">{area.name}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="text-center slide-up">
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-12 opacity-90">
            Let Chelsea guide you through the perfect properties in North Nashville
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-primary max-w-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              className="bg-white text-primary hover:bg-gray-100 whitespace-nowrap"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Nashville Nest</h3>
            <p className="text-muted-foreground">Your trusted partner in North Nashville real estate</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Areas We Serve</h4>
            <ul className="space-y-2 text-muted-foreground">
              {areas.map((area) => (
                <li key={area.name}>{area.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@nashvillenest.com</li>
              <li>(615) 555-0123</li>
              <li>123 Main Street</li>
              <li>Nashville, TN 37201</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
