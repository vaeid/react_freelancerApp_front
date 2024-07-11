import useUser from './useUser';
import Loading from '../../ui/Loading';
import { Link } from 'react-router-dom';
import Logout from './Logout';

export default function UserAvatar() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Loading spinner='InfinitySpin' />;
  return (
    <div className='flex justify-end gap-x-5'>
      <Link to='dashboard'>
        <div className='flex items-center gap-x-2 text-secondary-600'>
          <span className='text-base text-bold'>{user?.name}</span>
          <img
            className='w-12 h-12 rounded-full object-cover object-center'
            src='/public/user.jpg'
            alt={`user ${user?.name}`}
          />
        </div>
      </Link>
      <Logout />
    </div>
  );
}
