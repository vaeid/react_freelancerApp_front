import { HiMenu } from 'react-icons/hi';
import useUser from '../features/auth/useUser';

export default function Header() {
  const { data } = useUser();
  const { user } = data || {};
  return (
    <div className='flex justify-between '>
      <HiMenu className='w-5 h-5' />
      <span className='text-base text-bold'>{user?.name}</span>
    </div>
  );
}
