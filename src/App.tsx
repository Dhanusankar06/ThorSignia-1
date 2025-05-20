import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ContactPage from "./pages/Contact";
import AIEngineersPage from "./pages/AIEngineers";
import AboutPage from "./pages/About";
import AwardsPage from "./pages/Awards";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ServicesPage from "./pages/Services";
import CaseStudiesPage from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import CyberSecurity from "@/pages/CyberSecurity";

// Import cybersecurity service pages
import PenetrationTestPage from "@/pages/cybersecurity/PenetrationTestPage";
import CloudSecurityPage from "@/pages/cybersecurity/CloudSecurityPage";
import OffensiveSecurityPage from "@/pages/cybersecurity/OffensiveSecurityPage";
import RedTeamingPage from "@/pages/cybersecurity/RedTeamingPage";
import IOTSecurityPage from "@/pages/cybersecurity/IOTSecurityPage";
import VCISOPage from "@/pages/cybersecurity/VCISOPage";
import SecurityTrainingPage from "@/pages/cybersecurity/SecurityTrainingPage";

import { useEffect } from 'react';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-engineers" element={<AIEngineersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          
          {/* Cybersecurity service pages */}
          <Route path="/penetration-testing" element={<PenetrationTestPage />} />
          <Route path="/cloud-security" element={<CloudSecurityPage />} />
          <Route path="/offensive-security" element={<OffensiveSecurityPage />} />
          <Route path="/red-teaming" element={<RedTeamingPage />} />
          <Route path="/iot-security" element={<IOTSecurityPage />} />
          <Route path="/vciso-services" element={<VCISOPage />} />
          <Route path="/security-training" element={<SecurityTrainingPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
