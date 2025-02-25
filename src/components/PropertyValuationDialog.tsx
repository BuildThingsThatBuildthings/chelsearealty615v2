import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function PropertyValuationDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // In a real application, this would send the data to a server
    // For now, we'll just show a success message
    setSubmitted(true);
  };

  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={isMobile ? "w-[95%] p-4" : "sm:max-w-[500px]"}>
        <DialogHeader>
          <DialogTitle>Request Free Property Valuation</DialogTitle>
          <DialogDescription>
            Get a Comparative Market Analysis (CMA) to understand your property's value in today's market.
          </DialogDescription>
        </DialogHeader>
        
        {!submitted ? (
          <div className="grid gap-4 py-4">
            <div className={isMobile ? "grid gap-2" : "grid grid-cols-4 items-center gap-4"}>
              <Label htmlFor="name" className={isMobile ? "" : "text-right"}>
                Full Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={isMobile ? "w-full" : "col-span-3"}
                placeholder="Your full name"
              />
            </div>
            
            <div className={isMobile ? "grid gap-2" : "grid grid-cols-4 items-center gap-4"}>
              <Label htmlFor="email" className={isMobile ? "" : "text-right"}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={isMobile ? "w-full" : "col-span-3"}
                placeholder="Your email address"
              />
            </div>
            
            <div className={isMobile ? "grid gap-2" : "grid grid-cols-4 items-center gap-4"}>
              <Label htmlFor="address" className={isMobile ? "" : "text-right"}>
                Property Address
              </Label>
              <Input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={isMobile ? "w-full" : "col-span-3"}
                placeholder="Full property address"
              />
            </div>
            
            <div className={isMobile ? "grid gap-2" : "grid grid-cols-4 items-start gap-4"}>
              <Label htmlFor="additionalInfo" className={isMobile ? "" : "text-right"}>
                Additional Info
              </Label>
              <Textarea
                id="additionalInfo"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className={isMobile ? "w-full" : "col-span-3"}
                placeholder="Recent upgrades, special features, etc."
                rows={3}
              />
            </div>
            
            <div className={isMobile ? "mt-8 mb-16 pb-8" : "mt-2"}>
              <Button onClick={handleSubmit} className={isMobile ? "w-full py-6 text-lg" : ""}>
                Submit Request
              </Button>
            </div>
            
            <div className={isMobile ? "h-4" : ""}></div>
          </div>
        ) : (
          <div className={`py-6 text-center ${isMobile ? "px-2" : ""}`}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Request Submitted!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for your interest in our property valuation service. We'll contact you within 24-48 hours to discuss your property in detail.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Submit Another Request
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
