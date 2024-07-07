import { HiArrowRight } from 'react-icons/hi2';
import useMoveBack from '../hooks/useMoveBack';

export default function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className='sm:max-w-sm flex justify-center items-center'>
      <div>
        <h1 className='text-xl font-bold text-secondary-700 mb-8 mt-4 text-center'>404 PAGE</h1>
        <h2 className='text-xl font-bold text-secondary-700 mb-16 mt-4 text-center'>صفحه مورد نظر یافت نشد</h2>
        <button className='flex items-center gap-x-4' onClick={moveBack}>
          <HiArrowRight className='w-6 h-6 text-primary-900' />
          <span>برگشت</span>
        </button>
      </div>
    </div>
  );
}
