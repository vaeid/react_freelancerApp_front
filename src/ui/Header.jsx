import UserAvatar from '../features/auth/UserAvatar';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  return (
    <div className='flex justify-between container'>
      <HeaderMenu />
      <UserAvatar />
    </div>
  );
}
