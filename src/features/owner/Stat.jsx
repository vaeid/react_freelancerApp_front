export default function Stat({ title, value, children }) {
  return (
    <div className='col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4'>
      {children}
      <h5 className='font-bold text-lg self-center'> {title}</h5>
      <p className='text-3xl'>{value}</p>
    </div>
  );
}
