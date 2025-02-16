import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle2, Package } from "lucide-react";
import { EmailCaptureForm } from "./EmailCaptureForm";

interface MovingToolkitDialogProps {
  children?: React.ReactNode;
}

export function MovingToolkitDialog({ children }: MovingToolkitDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-[95vw] max-h-[90vh] p-3 sm:p-6 overflow-y-auto">
        <DialogHeader className="mb-2 sm:mb-4">
          <DialogTitle className="flex items-center gap-2 text-lg sm:text-2xl">
            <Package className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Your Moving Toolkit
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-lg">
            Get instant access to our comprehensive moving resources
          </DialogDescription>
        </DialogHeader>

        <div className="mt-3 sm:mt-6">
          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold">What's Included:</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1" />
                <span>
                  <strong className="text-sm sm:text-base">Moving Timeline Checklist</strong>
                  <br />
                  <span className="text-muted-foreground text-xs sm:text-sm">Stay organized with our week-by-week moving schedule</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1" />
                <span>
                  <strong className="text-sm sm:text-base">Local Service Provider Directory</strong>
                  <br />
                  <span className="text-muted-foreground text-xs sm:text-sm">Trusted recommendations for movers, utilities, and more</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1" />
                <span>
                  <strong className="text-sm sm:text-base">North Nashville Area Guide</strong>
                  <br />
                  <span className="text-muted-foreground text-xs sm:text-sm">Detailed insights about schools, amenities, and community features</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1" />
                <span>
                  <strong className="text-sm sm:text-base">Home Viewing Checklist</strong>
                  <br />
                  <span className="text-muted-foreground text-xs sm:text-sm">Know exactly what to look for during property tours</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-3 sm:mt-6 -mx-3 sm:mx-0">
            <EmailCaptureForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
