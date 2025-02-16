import { useEffect, useState } from "react";
import { ConnectDialog } from "./ConnectDialog";
import { MessageSquare } from "lucide-react";

export function FloatingConnectButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-6 duration-300"
      style={{
        filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))",
      }}
    >
      <div className="bg-primary text-white rounded-full p-3 flex items-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer">
        <ConnectDialog>
          <div className="flex items-center gap-2 px-2">
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Connect with Chelsea</span>
          </div>
        </ConnectDialog>
      </div>
    </div>
  );
}
