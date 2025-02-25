import { useState, useEffect, useRef } from "react";
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
  const isMobile = useIsMobile();
  const [submitted, setSubmitted] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(isMobile ? 800 : 750);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Load the form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Adjust iframe height based on window resize
    const handleResize = () => {
      setIframeHeight(window.innerWidth < 640 ? 800 : 750);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial height

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent 
        className={`${isMobile ? "w-[95%] p-4 max-h-[95vh] overflow-y-auto" : "sm:max-w-[500px] max-h-[95vh] overflow-y-auto"}`}
      >
        <DialogHeader className={isMobile ? "space-y-1" : "space-y-2"}>
          <DialogTitle className={isMobile ? "text-xl" : "text-2xl"}>Request Free Property Valuation</DialogTitle>
          <DialogDescription className={isMobile ? "text-sm" : "text-base"}>
            Get a Comparative Market Analysis (CMA) to understand your property's value in today's market.
          </DialogDescription>
        </DialogHeader>
        
        {!submitted ? (
          <div className={`pt-0 pb-2 -mt-1 ${isMobile ? "px-0" : "px-2"}`}>
            <iframe
              ref={iframeRef}
              src="https://api.leadconnectorhq.com/widget/form/T0gJ3mTmefXcstgCHes3"
              style={{
                width: "100%",
                height: `${iframeHeight}px`,
                border: "none",
                borderRadius: "3px"
              }}
              id="inline-T0gJ3mTmefXcstgCHes3" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="CMA Request"
              data-height={iframeHeight}
              data-layout-iframe-id="inline-T0gJ3mTmefXcstgCHes3"
              data-form-id="T0gJ3mTmefXcstgCHes3"
              title="CMA Request"
            />
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
