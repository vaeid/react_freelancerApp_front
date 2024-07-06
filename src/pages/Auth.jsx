import SendOTPForm from '../features/auth/SendOTPForm';
import ChechOTPForm from '../features/auth/ChechOTPForm';

export default function Auth() {
  return (
    <div className='flex justify-center pt-10'>
      <div className='w-full sm:max-w-sm'>
        <SendOTPForm />
        <ChechOTPForm />
      </div>
    </div>
  );
}
