import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

export default function ChechOTPForm() {
  const [otp, setOtp] = useState();
  return (
    <div className=''>
      <form className='space-y-5'>
        <p>کد تایید را وارد کنید</p>
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
        <button className='btn btn--block btn--primary'>تایید</button>
      </form>
    </div>
  );
}
