import { HiOutlineX } from 'react-icons/hi';

function Modal({ title, children, onClose, open }) {
  if (!open) return null;
  return (
    <div>
      <div
        className='backdrop-blur-sm fixed top-0 left-0 z-50 w-full h-screen bg-secondary-800 bg-opacity-30 '
        onClick={() => onClose(false)}
      >
        <div className='sm:min-w-96 min-w-40 fixed top1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out '>
          <div className='flex justify-between border-b border-b-secondary-300 pb-2 mb-7'>
            <p className='text-secondary-800 text-bold text-xl items-start'>{title}</p>
            <button className='items-end text-red-600' onClick={() => onClose(false)}>
              <HiOutlineX className='w-5 h-5' />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
