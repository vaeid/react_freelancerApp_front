export default function DashboardHeader({ title, description }) {
  return (
    <div className='mb-8'>
      <h1 className='font-bold text-2xl text-secondary-900 mb-5'>{title}</h1>
      <p className='text-secondary-600'> {description} </p>
    </div>
  );
}
