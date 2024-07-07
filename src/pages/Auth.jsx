import AuthContainer from '../features/auth/AuthContainer';

export default function Auth() {
  return (
    <div className='container max-w-screen-xl'>
      <div className='flex justify-center pt-10'>
        <AuthContainer />
      </div>
    </div>
  );
}
