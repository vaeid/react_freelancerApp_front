import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className='container max-w-screen-xl'>
        <Routes>
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/complete-profile' element={<CompleteProfile />}></Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
