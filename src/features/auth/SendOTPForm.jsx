import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';

export default function SendOTPForm({ register, onSubmit, isSendingOtp }) {
  return (
    <div>
      <form className='space-y-4' onSubmit={onSubmit}>
        <TextField
          label='موبایل'
          name='phoneNumber'
          type='tel'
          validationSchema={{
            required: 'موبایل ضروری است',
            minLength: { value: 10, message: 'حداقل 10 کاراکتر' },
          }}
          required
          register={register}
        />

        {isSendingOtp ? <Loading /> : <button className='btn btn--primary btn--block'>ارسال کد تایید</button>}
      </form>
    </div>
  );
}
