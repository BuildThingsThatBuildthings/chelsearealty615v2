import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResearchLibrary from "./pages/ResearchLibrary";
import MarketTrends from "./pages/reports/MarketTrends";
import Hendersonville from "./pages/reports/Hendersonville";
import Gallatin from "./pages/reports/Gallatin";
import WhiteHouse from "./pages/reports/WhiteHouse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research-library" element={<ResearchLibrary />} />
          <Route path="/research-library/market-trends" element={<MarketTrends />} />
          <Route path="/research-library/hendersonville" element={<Hendersonville />} />
          <Route path="/research-library/gallatin" element={<Gallatin />} />
          <Route path="/research-library/white-house" element={<WhiteHouse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
