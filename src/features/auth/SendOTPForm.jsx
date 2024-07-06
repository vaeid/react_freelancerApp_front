import React, { useState } from 'react';
import TextField from '../../ui/TextField';
import { useMutation } from '@tanstack/react-query';

export default function SendOTPForm() {
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: 'getOtp',
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      console.log();
    } catch (error) {}
  };
  return (
    <div>
      <form className='space-y-4' onSubmit={sendOtpHandler}>
        <TextField
          lable='موبایل'
          name='phoneNumber'
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <button className='btn btn--primary btn--block'>ارسال کد تایید</button>
      </form>
    </div>
  );
}
