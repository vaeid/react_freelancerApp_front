import UserAvatar from '../features/auth/UserAvatar';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  return (
    <div className=' bg-secondary-0 py-4 px-8 col-span-2 shadow-lg border-b border-secondary-100'>
      <div className='flex justify-between container gap-x-8'>
        <HeaderMenu />
        <UserAvatar />
      </div>
    </div>
  );
}
