import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { ReactNode } from "react";

interface ConnectDialogProps {
  children?: ReactNode;
}

export function ConnectDialog({ children }: ConnectDialogProps) {
  const [iframeHeight, setIframeHeight] = useState('700px');

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Adjust iframe height based on window width
    const updateIframeHeight = () => {
      const width = window.innerWidth;
      if (width < 640) { // mobile
        setIframeHeight('600px');
      } else {
        setIframeHeight('700px');
      }
    };

    // Initial call and event listener
    updateIframeHeight();
    window.addEventListener('resize', updateIframeHeight);

    return () => {
      window.removeEventListener('resize', updateIframeHeight);
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button className="bg-primary text-white hover:bg-primary/90">
            Connect with Chelsea
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-[95vw] max-h-[90vh] p-3 sm:p-6 overflow-y-auto">
        <DialogHeader className="mb-2 sm:mb-4">
          <DialogTitle className="text-lg sm:text-2xl">Connect with Chelsea</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Get in touch or schedule a consultation with Chelsea Bobbitt, REALTOR®
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-3 gap-1 sm:gap-4 mb-2 sm:mb-4">
          <a href="tel:615-579-3834" className="w-full">
            <Button variant="outline" className="w-full h-auto py-2 sm:py-3 text-xs sm:text-base" size="default">
              <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">Call</span>
            </Button>
          </a>
          
          <a href="sms:615-579-3834" className="w-full">
            <Button variant="outline" className="w-full h-auto py-2 sm:py-3 text-xs sm:text-base" size="default">
              <MessageSquare className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">Text</span>
            </Button>
          </a>
          
          <a href="mailto:chelsea.realty615@gmail.com" className="w-full">
            <Button variant="outline" className="w-full h-auto py-2 sm:py-3 text-xs sm:text-base" size="default">
              <Mail className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">Email</span>
            </Button>
          </a>
        </div>

        <div className="border-t pt-2 sm:pt-4">
          <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">Schedule a Consultation</h3>
          <div className="w-full -mx-3 sm:mx-0">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/xXMYBpaGOw2P4crfzJKV" 
              style={{ 
                width: '100%', 
                height: iframeHeight,
                border: 'none', 
                overflow: 'visible',
                transition: 'height 0.3s ease-in-out'
              }}
              scrolling="yes" 
              id="xXMYBpaGOw2P4crfzJKV_1739644652079"
              title="Schedule a consultation with Chelsea Bobbitt"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
