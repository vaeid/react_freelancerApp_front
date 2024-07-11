import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr] grid-cols-1 gap-3'>
      <div className=' bg-secondary-0 py-4 px-8 col-span-2 shadow-lg border-b border-secondary-100'>
        <Header />
      </div>
      <div className=' bg-secondary-0 hidden md:table-cell'>
        <Sidebar />
      </div>
      <div className=' bg-secondary-100 p-4 overflow-y-auto rounded-lg '>
        <div className='mx-auto max-w-screen-lg flex flex-col gap-y-12'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
