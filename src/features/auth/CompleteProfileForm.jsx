import TextField from '../../ui/TextField';
import RadioInput from '../../ui/RadioInput';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { completeProfile } from '../../services/authService';
import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import RadioInputGroup from '../../ui/RadioInputGroup';
export default function CompleteProfileForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({ mutationFn: completeProfile });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { user, message } = await mutateAsync(data);
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
      <form className='space-y-6 w-full sm:max-w-sm' onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name='name'
          validationSchema={{
            required: 'نام ضروری است',
            minLength: { value: 5, message: 'حداقل 5 کاراکتر' },
          }}
          label='نام '
          required
          register={register}
          errors={errors}
        />
        <TextField
          name='email'
          validationSchema={{
            required: 'ایمیل ضروری است',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'فرمت ایمیل وارد شده صحیح نیست email@example.com',
            },
          }}
          label='ایمیل '
          required
          register={register}
          errors={errors}
        />

        <RadioInputGroup
          errors={errors}
          register={register}
          watch={watch}
          configs={{
            name: 'role',
            validationSchema: { required: 'انتخاب نقش ضروری است' },
            options: [
              {
                value: 'OWNER',
                label: 'کارفرما',
              },
              { value: 'FREELANCER', label: 'فریلنسر' },
            ],
          }}
        />
        {isPending ? <Loading /> : <button className='btn btn--primary btn--block'> تایید</button>}
      </form>
    </div>
  );
}
