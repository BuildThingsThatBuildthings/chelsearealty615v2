import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { OnboardingForm } from "@/components/OnboardingForm";
import { Instagram } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ConnectDialog } from "@/components/ConnectDialog";

const Index = () => {
  const [email, setEmail] = useState("");

  const areas = [
    {
      name: "Family-Focused Living",
      description:
        "Find top-rated schools, safe neighborhoods, and family-friendly activities - perfect for growing families looking for their ideal community.",
    },
    {
      name: "Investment Potential",
      description:
        "Navigate Nashville's strong real estate market with data-driven insights on property appreciation and rental opportunities.",
    },
    {
      name: "Lifestyle Match",
      description:
        "Match your lifestyle with the perfect location - whether you need quick commute access or prefer peaceful suburban living.",
    },
    {
      name: "Custom Roadmap",
      description:
        "Get a personalized plan for your home transition, from market timing to financing options and moving logistics.",
    },
    {
      name: "Market Advantage",
      description:
        "Leverage Nashville's robust job market and affordable cost of living to make a smart, long-term investment in your future.",
    },
  ];

  const features = [
    {
      title: "Local Expertise",
      description: "Deep knowledge of North Nashville markets",
    },
    {
      title: "Personal Touch",
      description: "Tailored service for every client",
    },
    {
      title: "Market Insight",
      description: "Real-time data and trend analysis",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3')] 
          bg-cover bg-center"
          style={{ filter: "brightness(0.7)" }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Frustrated by the Chaos of Nashville Real Estate? Let's Bring Clarity to Your Home Search.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Simplify your journey – expert advice that cuts through the clutter.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 text-lg px-8 py-6">
                Get Your Moving Toolkit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <OnboardingForm />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* About Agent Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Meet Chelsea Bobbitt</h2>
              <h3 className="text-xl text-muted-foreground">
                Your dedicated North Nashville real estate expert.
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  As an entrepreneur, mother, and wife, Chelsea knows what it means to balance life's demands while creating a warm, welcoming home. With deep local roots and extensive experience in the North Nashville market, she brings a personal touch to every client interaction—understanding that finding the perfect home is about more than just property; it's about building a lifestyle.
                </p>
                <p className="text-muted-foreground">
                  Specializing in family-friendly neighborhoods like Hendersonville, Gallatin, White House, Green Briar, and Goodlettsville, Chelsea is passionate about helping you navigate the complexities of real estate with ease and clarity. Whether you're a first-time buyer or seeking an upgrade, she's committed to making your home buying journey seamless and stress-free.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <ConnectDialog />
              </div>
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

      {/* Areas We Serve Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover your perfect home in these welcoming North Nashville communities, each offering its own unique charm and lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Hendersonville</h3>
              <p className="text-muted-foreground mb-4">
                A lakeside community offering a perfect blend of suburban comfort and natural beauty.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Gallatin</h3>
              <p className="text-muted-foreground mb-4">
                A historic town with a modern spirit, featuring great schools and a thriving downtown.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">White House</h3>
              <p className="text-muted-foreground mb-4">
                A family-friendly community known for its strong sense of community and peaceful living.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Green Briar</h3>
              <p className="text-muted-foreground mb-4">
                A charming neighborhood that combines rural tranquility with modern conveniences.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Goodlettsville</h3>
              <p className="text-muted-foreground mb-4">
                A vibrant community offering excellent shopping, dining, and easy access to Nashville.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <h3 className="text-2xl font-semibold mb-3">Ready to Explore?</h3>
              <p className="text-muted-foreground mb-4">
                Let's find your perfect neighborhood together. Connect with Chelsea to start your journey.
              </p>
              <div className="mt-2">
                <ConnectDialog />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Path to Perfect Home Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Path to the Perfect Home</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to finding your dream home, backed by expert guidance every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-semibold">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Discovery Call</h3>
              <p className="text-muted-foreground">
                Let's discuss your needs, preferences, and must-haves for your ideal home. We'll create a personalized plan tailored to your goals.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-semibold">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Home Search</h3>
              <p className="text-muted-foreground">
                Access curated listings matching your criteria. We'll schedule viewings and help you evaluate each property's potential.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-semibold">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Move-In Ready</h3>
              <p className="text-muted-foreground">
                From offer to closing, we'll handle the details. Get ready to move into your perfect home with confidence and excitement.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <ConnectDialog />
          </div>
        </div>
      </section>

      {/* Research Library Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Research Library</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Make informed decisions with our comprehensive collection of
                North Nashville market reports, community insights, and
                neighborhood guides.
              </p>
              <Button
                size="lg"
                className="hover:scale-105 transform transition-all duration-200"
                asChild
              >
                <Link to="/research-library">View Research Reports →</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur">
                <h3 className="text-lg font-semibold mb-2">Market Trends</h3>
                <p className="text-sm text-muted-foreground">
                  Latest data on property values and market dynamics
                </p>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <h3 className="text-lg font-semibold mb-2">
                  Community Insights
                </h3>
                <p className="text-sm text-muted-foreground">
                  Deep dives into neighborhood development
                </p>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <h3 className="text-lg font-semibold mb-2">Area Guides</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed profiles of North Nashville areas
                </p>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <h3 className="text-lg font-semibold mb-2">Growth Forecasts</h3>
                <p className="text-sm text-muted-foreground">
                  Future projections and opportunities
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Us
          </h2>
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
          <h2 className="text-4xl font-bold mb-8">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Let Chelsea guide you through the perfect properties in North
            Nashville
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-primary max-w-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-white text-primary hover:bg-gray-100 whitespace-nowrap">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
