import { useEffect, useState, lazy, Suspense } from "react";

// Lazy load the iframe component
const EmailCaptureIframe = lazy(() => 
  import('./EmailCaptureIframe').then(module => ({
    default: module.EmailCaptureIframe
  }))
);

export const EmailCaptureForm = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  
  useEffect(() => {
    // Delay loading the form until after initial page render
    const timer = setTimeout(() => {
      setIsFormLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="email-capture-container">
      {isFormLoaded ? (
        <Suspense fallback={
          <div className="flex items-center justify-center p-8 bg-gray-50 rounded-md" style={{ height: "430px" }}>
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading form...</p>
            </div>
          </div>
        }>
          <EmailCaptureIframe />
        </Suspense>
      ) : (
        <div className="flex items-center justify-center p-8 bg-gray-50 rounded-md" style={{ height: "430px" }}>
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Get in Touch</h3>
            <p className="text-muted-foreground mb-4">Loading contact form...</p>
            <div className="animate-pulse flex space-x-4 justify-center">
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
