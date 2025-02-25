import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function FormSuccess() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Request Submitted | Chelsea Bobbitt Realty</title>
        <meta 
          name="description" 
          content="Thank you for submitting your property valuation request. We'll be in touch soon!"
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Request Submitted!</h1>
          
          <p className="text-muted-foreground mb-6">
            Thank you for your interest in our property valuation service. We'll contact you within 24-48 hours to discuss your property in detail.
          </p>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link to="/">Return to Home</Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <Link to="/research-library">Explore Market Reports</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
