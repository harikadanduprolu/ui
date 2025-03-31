
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ButtonsPage from "./pages/ButtonsPage";
import InputsPage from "./pages/InputsPage";
import CardsPage from "./pages/CardsPage";
import SliderPage from "./pages/SliderPage";
import CheckboxPage from "./pages/CheckboxPage";
import SelectPage from "./pages/SelectPage";
import SwitchPage from "./pages/SwitchPage";
import RadioGroupPage from "./pages/RadioGroupPage";
import PremiumModelsPage from "./pages/PremiumModelsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// New pages
import BadgePage from "./pages/BadgePage";
import DialogPage from "./pages/DialogPage";
import AlertPage from "./pages/AlertPage";
import ToastPage from "./pages/ToastPage";
import TabsPage from "./pages/TabsPage";
import AvatarPage from "./pages/AvatarPage";
import CalendarPage from "./pages/CalendarPage";
import TablePage from "./pages/TablePage";
import AccordionPage from "./pages/AccordionPage";
import DropdownMenuPage from "./pages/DropdownMenuPage";
import FormPage from "./pages/FormPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/premium-models" element={<PremiumModelsPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/inputs" element={<InputsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/checkbox" element={<CheckboxPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/switch" element={<SwitchPage />} />
          <Route path="/radio-group" element={<RadioGroupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          
          {/* New routes for missing pages */}
          <Route path="/badge" element={<BadgePage />} />
          <Route path="/dialog" element={<DialogPage />} />
          <Route path="/alert" element={<AlertPage />} />
          <Route path="/toast" element={<ToastPage />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/dropdown-menu" element={<DropdownMenuPage />} />
          <Route path="/form" element={<FormPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
