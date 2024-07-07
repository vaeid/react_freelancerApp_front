import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout';
import Owner from './pages/Owner';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />

      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
        <Route element={<AppLayout />}>
          <Route path='/owner' element={<Owner />}></Route>
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/complete-profile' element={<CompleteProfile />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
