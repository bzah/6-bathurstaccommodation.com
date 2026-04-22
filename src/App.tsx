import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BlogIndex from "./pages/BlogIndex.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import AttractionsPage from "./pages/AttractionsPage.tsx";
import AccommodationTypesPage from "./pages/AccommodationTypesPage.tsx";
import ToursPage from "./pages/ToursPage.tsx";
import MountPanoramaPage from "./pages/MountPanoramaPage.tsx";
import Bathurst1000Page from "./pages/Bathurst1000Page.tsx";
import WineriesPage from "./pages/WineriesPage.tsx";
import FamilyPage from "./pages/FamilyPage.tsx";
import RestaurantsPage from "./pages/RestaurantsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import CookiePolicyPage from "./pages/CookiePolicyPage.tsx";
import DmcaPage from "./pages/DmcaPage.tsx";
import LegalNoticePage from "./pages/LegalNoticePage.tsx";
import ParentsInfoPage from "./pages/ParentsInfoPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import AnalyticsTracker from "./components/AnalyticsTracker.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/attractions" element={<AttractionsPage />} />
          <Route path="/accommodation-types" element={<AccommodationTypesPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/mount-panorama" element={<MountPanoramaPage />} />
          <Route path="/bathurst-1000" element={<Bathurst1000Page />} />
          <Route path="/wineries" element={<WineriesPage />} />
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/dmca" element={<DmcaPage />} />
          <Route path="/legal-notice" element={<LegalNoticePage />} />
          <Route path="/parents-info" element={<ParentsInfoPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
