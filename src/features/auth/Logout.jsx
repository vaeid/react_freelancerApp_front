import { HiOutlineLogout } from 'react-icons/hi';
import useLogout from './useLogout';
import Loading from '../../ui/Loading';

export default function Logout() {
  const { logout, isPending } = useLogout();

  if (isPending) return <Loading />;
  return (
    <button onClick={logout}>
      <HiOutlineLogout className='w-5 h-5 text-secondary-600 hover:text-error' />
    </button>
  );
}
