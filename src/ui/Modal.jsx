import { HiOutlineX } from 'react-icons/hi';
import useOutsideClick from '../hooks/useOutsideClick';

function Modal({ title, children, onClose, open }) {
  const ref = useOutsideClick(onClose);
  if (!open) return null;
  return (
    <div
      className='backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800 bg-opacity-30 z-50'
    >
      <div
        ref={ref}
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out 
        sm:max-w-md min-w-40 w-[calc(100vw-3rem)] max-h-[calc(100vh-2rem)] overflow-y-auto '
      >
        <div className='flex justify-between border-b border-b-secondary-300 pb-2 mb-7'>
          <p className='text-secondary-800 text-bold text-xl items-start'>{title}</p>
          <button className='items-end text-red-600' onClick={() => onClose(false)}>
            <HiOutlineX className='w-5 h-5' />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
