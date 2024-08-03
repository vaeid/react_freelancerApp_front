import { useEffect, useState } from 'react';
import SendOTPForm from './SendOTPForm';
import ChechOTPForm from './ChechOTPForm';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import useUser from './useUser';
import { useNavigate } from 'react-router-dom';
export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [user, navigate]);
  // const [phoneNumber, setPhoneNumber] = useState('');
  const { register, getValues, handleSubmit } = useForm();

  const {
    isPending,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPForm register={register} onSubmit={handleSubmit(sendOtpHandler)} isSendingOtp={isPending} />;
      case 2:
        return (
          <ChechOTPForm
            phoneNumber={getValues('phoneNumber')}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        break;
    }
  };
  return <div className='w-full sm:max-w-sm'> {renderStep()}</div>;
}
