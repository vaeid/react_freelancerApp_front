import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';
import NotFound from './pages/NotFound';
import OwnerDashboard from './pages/OwnerDashboard';
import Projects from './pages/Projects';
import Project from './pages/Project';
import { DarKModeProvider } from './context/DarkModeContext';
import OwnerLayout from './features/owner/OwnerLayout';
import FreelancerLayout from './features/freelancer/FreelancerLayout';
import FreelancerDashboard from './pages/FreelancerDashboard';
import Proposals from './pages/Proposals';
import SubmittedProjects from './pages/SubmittedProjects';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProtectedRoute from './ui/ProtectedRoute';
import AdminLayout from './features/admin/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import Users from './pages/Users';
const queryClient = new QueryClient();
export default function App() {
  return (
    <DarKModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/complete-profile' element={<CompleteProfile />} />
          <Route
            path='/owner'
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={'dashboard'} replace />} />
            <Route path='dashboard' element={<OwnerDashboard />} />
            <Route path='projects' element={<Projects />} />
            <Route path='projects/:id' element={<Project />} />
          </Route>
          <Route
            path='/freelancer'
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={'dashboard'} replace />} />
            <Route path='dashboard' element={<FreelancerDashboard />} />
            <Route path='projects' element={<SubmittedProjects />} />
            <Route path='proposals' element={<Proposals />} />
          </Route>
          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='projects' element={<SubmittedProjects />} />
            <Route path='users' element={<Users />} />
            <Route path='proposals' element={<Proposals />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarKModeProvider>
  );
}
