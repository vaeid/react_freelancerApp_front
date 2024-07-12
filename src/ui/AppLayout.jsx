import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function AppLayout({ children }) {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr] grid-cols-1 gap-3'>
      <Header />
      {/* sidebar */ children}
      <div className=' bg-secondary-100 p-4 overflow-y-auto rounded-lg '>
        <div className='mx-auto max-w-screen-lg flex flex-col gap-y-12'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
