import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { AppLayout } from "@/components/layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Trainers from "./pages/Trainers";
import StaffPage from "./pages/StaffPage";
import MemberDashboard from "./pages/MemberDashboard";
import TrainerDashboard from "./pages/TrainerDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import MembershipPlans from "./pages/MembershipPlans";
import Discounts from "./pages/Discounts";
import Payments from "./pages/Payments";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
              <Route path="/members" element={<AppLayout><Members /></AppLayout>} />
              <Route path="/trainers" element={<AppLayout><Trainers /></AppLayout>} />
              <Route path="/staff" element={<AppLayout><StaffPage /></AppLayout>} />
              <Route path="/member/:id" element={<AppLayout><MemberDashboard /></AppLayout>} />
              <Route path="/trainer/:id" element={<AppLayout><TrainerDashboard /></AppLayout>} />
              <Route path="/staff-profile/:id" element={<AppLayout><StaffDashboard /></AppLayout>} />
              <Route path="/plans" element={<AppLayout><MembershipPlans /></AppLayout>} />
              <Route path="/discounts" element={<AppLayout><Discounts /></AppLayout>} />
              <Route path="/payments" element={<AppLayout><Payments /></AppLayout>} />
              <Route path="/notifications" element={<AppLayout><Notifications /></AppLayout>} />
              <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
