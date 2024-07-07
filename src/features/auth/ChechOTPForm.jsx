import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { checkOtp } from '../../services/authService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../ui/Loading';
import { HiArrowRight } from 'react-icons/hi';
const RESEND_TIME = 90;
export default function ChechOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [time, setTime] = useState(RESEND_TIME);
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        if (user.role === 'OWNER') navigate('/owner');
        if (user.role === 'FREELANCER') navigate('/freelancer');
      } else {
        navigate('/complete-profile');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  return (
    <div className=''>
      <button className='p-2 rounded-lg mb-4' onClick={onBack}>
        <HiArrowRight className='text-secondary-500 w-6 h-6' />
      </button>
      {otpResponse && (
        <div className='mb-5 text-center'>
          <p>{otpResponse.message}</p>
          <button className='text-secondary-500' onClick={onBack}>
            ویرایش شماره
          </button>
        </div>
      )}
      <hr />
      <br />
      <div className='mb-4 text-center'>
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp} className='btn btn--outline'>
            ارسال مجدد کد
          </button>
        )}
      </div>
      <form className='space-y-5' onSubmit={checkOtpHandler}>
        <p className='text-secondary-500'>کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type='number' {...props} />}
          containerStyle='flex flex-row-reverse gap-2 justify-center'
          inputStyle={{
            width: '2.5rem',
            padding: '0.5rem 0.2rem',
            border: '1px solid rgb(var(--color-primary-600))',
            borderRadius: ' 0.5rem',
          }}
        />
        {isPending ? <Loading /> : <button className='btn btn--primary btn--block'> تایید</button>}
      </form>
    </div>
  );
}
