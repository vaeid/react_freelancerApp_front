import { HiMoon, HiOutlineSun } from 'react-icons/hi';
import { useDarkMode } from '../context/DarkModeContext';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {!isDarkMode ? (
        <HiMoon className='w-5 h-5 text-primary-900' />
      ) : (
        <HiOutlineSun className='w-5 h-5 text-yellow-400' />
      )}
    </button>
  );
}
