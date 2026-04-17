import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import GloboEsim from "./pages/GloboEsim";
import OdontoLead from "./pages/OdontoLead";
import DentalFlowPrivacyPolicy from "./pages/DentalFlowPrivacyPolicy";
import PropuestaGustavo from "./pages/PropuestaGustavo";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/globo-esim" element={<GloboEsim />} />
          <Route path="/solucion-clinicas" element={<OdontoLead />} />
          <Route path="/dentalflow/politica-de-privacidad" element={<DentalFlowPrivacyPolicy />} />
          <Route path="/propuesta/gustavo" element={<PropuestaGustavo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
