import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Chelsea Bobbitt, REALTOR®</h3>
            <p className="text-muted-foreground mb-2">EXIT Realty Refined</p>
            <div className="space-y-2">
              <a 
                href="tel:615-579-3834" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>C: 615-579-3834</span>
              </a>
              <a 
                href="tel:615-989-7733" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>O: 615-989-7733</span>
              </a>
              <a 
                href="https://maps.google.com/?q=101+Public+Square,+Gallatin,+TN+37066"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span>101 Public Square | Gallatin, TN 37066</span>
              </a>
              <a 
                href="mailto:chelsea.realty615@gmail.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>chelsea.realty615@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/chelsea.realty615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61565124897810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Chelsea Bobbitt Realty. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Each EXIT Office is Independently Owned and Operated
            </p>
            <a 
              href="https://www.buildthingsthatbuildthings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/75 hover:text-primary transition-colors mt-2 inline-block"
            >
              Marketing Engineered by Build Things That Build Things
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
