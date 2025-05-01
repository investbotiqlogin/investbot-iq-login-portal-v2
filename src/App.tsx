import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./layouts/DashboardLayout";
import MemberDashboard from "./pages/member/Dashboard";
import MemberTasks from "./pages/member/Tasks";
import MemberAIRunning from "./pages/member/AIRunning";
import MemberProfile from "./pages/member/Profile";
import MemberProgress from "./pages/member/Progress";
import MemberReferrals from "./pages/member/Referrals";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminTasks from "./pages/admin/Tasks";
import AdminAIRunning from "./pages/admin/AIRunning";
import AdminProfile from "./pages/admin/Profile";
import AdminProgress from "./pages/admin/Progress";
import AdminReferrals from "./pages/admin/Referrals";
import AdminRegistrations from "./pages/admin/Registrations";
import AdminUsers from "./pages/admin/Users";
import AdminNotifications from "./pages/admin/Notifications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/inlog" element={<Login />} />

            {/* Member routes - allow all non-admin roles */}
            <Route 
              path="/member" 
              element={
                <ProtectedRoute allowedRoles={['member', 'student', 'ouder', 'freelancer', 'ondernemer', 'affiliated']}>
                  <DashboardLayout role="member" />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/member/dashboard" replace />} />
              <Route path="dashboard" element={<MemberDashboard />} />
              <Route path="tasks" element={<MemberTasks />} />
              <Route path="ai-running" element={<MemberAIRunning />} />
              <Route path="profile" element={<MemberProfile />} />
              <Route path="progress" element={<MemberProgress />} />
              <Route path="referrals" element={<MemberReferrals />} />
            </Route>

            {/* Admin routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <DashboardLayout role="admin" />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="ai-running" element={<AdminAIRunning />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="progress" element={<AdminProgress />} />
              <Route path="referrals" element={<AdminReferrals />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="tasks" element={<AdminTasks />} />
              <Route path="registrations" element={<AdminRegistrations />} />
              <Route path="notifications" element={<AdminNotifications />} />
              <Route path="leads" element={<div className="p-4">Leads pagina (nog te implementeren)</div>} />
              <Route path="settings" element={<div className="p-4">Instellingen pagina (nog te implementeren)</div>} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
