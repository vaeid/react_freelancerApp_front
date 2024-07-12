export default function Sidebar({ children }) {
  return (
    <div className=' bg-secondary-0 hidden md:table-cell rounded-lg'>
      <ul className='flex flex-col gap-y-4 pt-4 px-2'>{children}</ul>;
    </div>
  );
}
