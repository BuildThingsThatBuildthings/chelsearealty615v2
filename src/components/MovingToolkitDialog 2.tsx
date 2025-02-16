import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CheckCircle2, Package } from "lucide-react";

interface MovingToolkitDialogProps {
  children?: React.ReactNode;
}

export function MovingToolkitDialog({ children }: MovingToolkitDialogProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email submission
    setSubmitted(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Package className="h-6 w-6 text-primary" />
            Your Moving Toolkit
          </DialogTitle>
          <DialogDescription className="text-lg">
            Get instant access to our comprehensive moving resources
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold">What's Included:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span>
                  <strong>Moving Timeline Checklist</strong>
                  <br />
                  <span className="text-muted-foreground">Stay organized with our week-by-week moving schedule</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span>
                  <strong>Local Service Provider Directory</strong>
                  <br />
                  <span className="text-muted-foreground">Trusted recommendations for movers, utilities, and more</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span>
                  <strong>North Nashville Area Guide</strong>
                  <br />
                  <span className="text-muted-foreground">Detailed insights about schools, amenities, and community features</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span>
                  <strong>Home Viewing Checklist</strong>
                  <br />
                  <span className="text-muted-foreground">Know exactly what to look for during property tours</span>
                </span>
              </li>
            </ul>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                Get Your Toolkit
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to receive emails from us. You can unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Thank You!</h3>
              <p className="text-muted-foreground">
                Check your email for your Moving Toolkit. If you don't see it, please check your spam folder.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
