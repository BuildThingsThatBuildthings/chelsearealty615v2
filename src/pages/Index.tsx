import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ConnectDialog } from "@/components/ConnectDialog";
import { FloatingConnectButton } from "@/components/FloatingConnectButton";
import { MovingToolkitDialog } from "@/components/MovingToolkitDialog";
import { MortgageCalculatorDialog } from "@/components/MortgageCalculatorDialog";
import { PropertyValuationDialog } from "@/components/PropertyValuationDialog";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";

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
      description: "Deep knowledge of Middle Tennessee markets",
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
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/hero-background.webp"
            alt="Nashville Real Estate Hero"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.7)" }}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Frustrated by the Chaos of Nashville Real Estate? Let's Bring
            Clarity to Your Home Search.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Simplify your journey – expert advice that cuts through the clutter.
          </p>
          <MovingToolkitDialog>
            <Button className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 text-lg px-8 py-6">
              Get Your Moving Toolkit
            </Button>
          </MovingToolkitDialog>
        </div>
      </section>

      {/* About Agent Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Meet Chelsea Bobbitt</h2>
              <h3 className="text-xl text-muted-foreground">
                Your dedicated Middle Tennessee real estate expert.
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  As an entrepreneur, mother, and wife, Chelsea knows what it
                  means to balance life's demands while creating a warm,
                  welcoming home. With deep local roots and extensive experience
                  in the Middle Tennessee market, she brings a personal touch to
                  every client interaction—understanding that finding the
                  perfect home is about more than just property; it's about
                  building a lifestyle.
                </p>
                <p className="text-muted-foreground">
                  Specializing in family-friendly neighborhoods like
                  Hendersonville, Gallatin, White House, Green Briar, and
                  Goodlettsville, Chelsea is passionate about helping you
                  navigate the complexities of real estate with ease and
                  clarity. Whether you're a first-time buyer or seeking an
                  upgrade, she's committed to making your home buying journey
                  seamless and stress-free.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <ConnectDialog />
              </div>
            </div>
            <div className="relative">
              <picture>
                <source
                  srcSet="/assets/chelsea-bobbitt.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/chelsea-bobbitt.jpg"
                  alt="Chelsea Bobbitt - Lead Real Estate Agent"
                  className="rounded-lg shadow-xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  width="500"
                  height="600"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/10 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Free Tools</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Take advantage of these complimentary resources to help with your home buying journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17V3" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12H3m3 6H3m18-6h-2m-3 6h2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Mortgage Calculator</h3>
                  <p className="text-sm text-muted-foreground">
                    Estimate your monthly payments and see how much house you can afford
                  </p>
                  <MortgageCalculatorDialog>
                    <Button variant="link" className="mt-4">
                      Calculate Now
                    </Button>
                  </MortgageCalculatorDialog>
                </div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Free Property Valuation</h3>
                  <p className="text-sm text-muted-foreground">
                    Request a Comparative Market Analysis to know your home's value
                  </p>
                  <PropertyValuationDialog>
                    <Button variant="link" className="mt-4">
                      Request CMA
                    </Button>
                  </PropertyValuationDialog>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What My Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by families across Middle Tennessee for years of dedicated
              service and exceptional care.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic text-lg">
                "Chelsea is an outstanding young woman! She has worked in my home for many years and has always
                impressed me with her cheerful and positive personality. She is extremely organized and efficient with
                her work, and yet flexible and always willing to accommodate special requests.
                Her attention to detail and skill in her work are outstanding! I highly recommend her!"
              </p>
              <div className="pt-4 border-t">
                <p className="font-semibold">Ellen F.</p>
                <p className="text-sm text-muted-foreground">Long-term Client</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Chelsea has worked for me for over six years. Her work habits
                  are excellent and she goes above and beyond to please. She
                  completes her duties in an unsupervised and unobtrusive
                  manner. I have found Chelsea to be responsible and extremely
                  trustworthy. Her pleasant personality make her a joy to have
                  in my home."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Patty F.</p>
                  <p className="text-sm text-muted-foreground">Long-term Client</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Chelsea worked for my husband and I for many years at two
                  properties we owned. She is a consummate professional. Her
                  attention to detail was outstanding. Throughout these years
                  she was a person of integrity and character. She was also
                  courteous, kind and flexible. I recommend her without
                  hesitation to carry out, to the best of her abilities, her
                  responsibilities as a realtor."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Satisfied Client</p>
                  <p className="text-sm text-muted-foreground">Long-term Client</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "I can't say enough great things about Chelsea - she's hard
                  working, great at communication, savvy and so kind! From the
                  first time I met her, I knew I could trust her with my home.
                  She makes things easy, takes care and pays attention to all
                  the details. If you're considering hiring her - do it! She's
                  exceptional and I am so grateful for her."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Sheri H.</p>
                  <p className="text-sm text-muted-foreground">Long-term Client</p>
                </div>
              </div>
            </div>
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
                Middle Tennessee market reports, community insights, and
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
                <h3 className="text-lg font-semibold mb-2">School Ratings</h3>
                <p className="text-sm text-muted-foreground">
                  Education quality and school district analysis
                </p>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <h3 className="text-lg font-semibold mb-2">
                  Investment Potential
                </h3>
                <p className="text-sm text-muted-foreground">
                  Growth opportunities and ROI forecasts
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Serving Middle Tennessee
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover your perfect home in Middle Tennessee's thriving
              communities. Expert real estate services in Hendersonville,
              Gallatin, White House, Portland, and Goodlettsville.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Hendersonville</h3>
              <p className="text-muted-foreground mb-4">
                A lakeside community offering a perfect blend of suburban
                comfort and natural beauty.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Gallatin</h3>
              <p className="text-muted-foreground mb-4">
                A historic town with a modern spirit, featuring great schools
                and a thriving downtown.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">White House</h3>
              <p className="text-muted-foreground mb-4">
                A family-friendly community known for its strong sense of
                community and peaceful living.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Portland</h3>
              <p className="text-muted-foreground mb-4">
                A charming community with a strong sense of local pride,
                Portland offers a perfect blend of suburban comfort and rural
                charm, making it an ideal choice for families and first-time
                homebuyers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Goodlettsville</h3>
              <p className="text-muted-foreground mb-4">
                A vibrant community offering excellent shopping, dining, and
                easy access to Nashville.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <h3 className="text-2xl font-semibold mb-3">Surrounding Areas</h3>
              <p className="text-muted-foreground mb-4">
                We also serve many surrounding communities in the Middle
                Tennessee area. Ask us about your preferred location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Path to Perfect Home Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Your Path to the Perfect Home
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to finding your dream home, backed by
              expert guidance every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-semibold">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Discovery Call</h3>
              <p className="text-muted-foreground">
                Let's discuss your needs, preferences, and must-haves for your
                ideal home. We'll create a personalized plan tailored to your
                goals.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-semibold">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Home Search</h3>
              <p className="text-muted-foreground">
                Access curated listings matching your criteria. We'll schedule
                viewings and help you evaluate each property's potential.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-semibold">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Move-In Ready</h3>
              <p className="text-muted-foreground">
                From offer to closing, we'll handle the details. Get ready to
                move into your perfect home with confidence and excitement.
              </p>
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
            Let Chelsea guide you through the perfect properties in Middle
            Tennessee
          </p>
          <div className="bg-white p-8 rounded-lg">
            <EmailCaptureForm />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingConnectButton />
    </div>
  );
};

export default Index;
