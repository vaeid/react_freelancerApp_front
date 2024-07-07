import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';
export default function SendOTPForm({ setPhoneNumber, phoneNumber, onSubmit, isSendingOtp }) {
  return (
    <div>
      <form className='space-y-4' onSubmit={onSubmit}>
        <TextField
          lable='موبایل'
          name='phoneNumber'
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        {isSendingOtp ? <Loading /> : <button className='btn btn--primary btn--block'>ارسال کد تایید</button>}
      </form>
    </div>
  );
}
