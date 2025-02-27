import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ResearchLibrary = lazy(() => import("./pages/ResearchLibrary"));
const Hendersonville = lazy(() => import("./pages/reports/Hendersonville"));
const Gallatin = lazy(() => import("./pages/reports/Gallatin"));
const WhiteHouse = lazy(() => import("./pages/reports/WhiteHouse"));
const NashvilleMarket = lazy(() => import("./pages/reports/NashvilleMarket"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const FormSuccess = lazy(() => import("./pages/FormSuccess"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Improves performance by preventing unnecessary refetches
      retry: 1, // Limit retries to improve performance
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/research-library" element={<ResearchLibrary />} />
            <Route path="/research-library/nashville-market" element={<NashvilleMarket />} />
            <Route path="/research-library/hendersonville" element={<Hendersonville />} />
            <Route path="/research-library/gallatin" element={<Gallatin />} />
            <Route path="/research-library/white-house" element={<WhiteHouse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/form-success" element={<FormSuccess />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
