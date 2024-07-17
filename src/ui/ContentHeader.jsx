import { HiArrowRight } from 'react-icons/hi';
import useMoveBack from '../hooks/useMoveBack';
export default function DashboardHeader({ title, description, isBack = false }) {
  const moveBack = useMoveBack();
  return (
    <div>
      {isBack && (
        <button className='mb-14' onClick={moveBack}>
          <HiArrowRight className='w-5 h-5 text-secondary-500' />
        </button>
      )}

      <div className='mb-8'>
        <h1 className='font-bold text-2xl text-secondary-900 mb-5'>{title}</h1>
        <p className='text-secondary-600'> {description} </p>
      </div>
    </div>
  );
}
