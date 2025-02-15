import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export function ConnectDialog() {
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
      document.body.removeChild(script);
      window.removeEventListener('resize', updateIframeHeight);
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white">
          Connect with Chelsea
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-[95vw] h-[95vh] p-4 sm:p-6 overflow-y-auto">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl sm:text-2xl">Connect with Chelsea</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
          <a href="tel:615-579-3834" className="w-full">
            <Button variant="outline" className="w-full text-sm sm:text-base" size="default">
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Call
            </Button>
          </a>
          
          <a href="sms:615-579-3834" className="w-full">
            <Button variant="outline" className="w-full text-sm sm:text-base" size="default">
              <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Text
            </Button>
          </a>
          
          <a href="mailto:chelsea.realty615@gmail.com" className="w-full">
            <Button variant="outline" className="w-full text-sm sm:text-base" size="default">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Email
            </Button>
          </a>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-base sm:text-lg font-semibold mb-4">Schedule a Consultation</h3>
          <div className="w-full">
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
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
