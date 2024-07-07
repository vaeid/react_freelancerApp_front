import { useState } from 'react';
import TextField from '../../ui/TextField';
import RadioInput from '../../ui/RadioInput';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { completeProfile } from '../../services/authService';
import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';
export default function CompleteProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const handelRole = (selectRole) => {
    setRole(selectRole);
  };
  const { isPending, mutateAsync } = useMutation({ mutationFn: completeProfile });
  const handelCompleteProfile = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      if (user.status !== 2) {
        toast.error('پروفایل شما در انتظار تایید است');
        return navigate('/active');
      }
      if (user.role === 'OWNER') return navigate('/owner');
      if (user.role === 'FREELANCER') return navigate('/freelancer');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className='flex justify-center pt-10'>
      <form className='space-y-6 w-full sm:max-w-sm' onSubmit={handelCompleteProfile}>
        <TextField
          lable='نام'
          name='name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          lable='ایمیل'
          name='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className='flex items-center justify-center gap-x-8'>
          <RadioInput label='کارفرما' name='role' value='OWNER' onchange={handelRole} checked={role === 'OWNER'} />
          <RadioInput
            label='فریلنسر'
            name='role'
            value='FREELANCER'
            onchange={handelRole}
            checked={role === 'FREELANCER'}
          />
        </div>
        {isPending ? <Loading /> : <button className='btn btn--primary btn--block'> تایید</button>}
      </form>
    </div>
  );
}
