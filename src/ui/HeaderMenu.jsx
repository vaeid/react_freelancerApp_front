import { HiMenu } from 'react-icons/hi';
import DarkModeToggle from './DarkModeToggle';

export default function HeaderMenu() {
  return (
    <ul className='flex gap-x-5 items-center'>
      <li>
        <button>
          <HiMenu className='w-5 h-5 text-secondary-700' />
        </button>
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </ul>
  );
}
