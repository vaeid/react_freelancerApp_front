import UserAvatar from '../features/auth/UserAvatar';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  return (
    <div className='flex justify-between container gap-x-8'>
      <HeaderMenu />
      <UserAvatar />
    </div>
  );
}
