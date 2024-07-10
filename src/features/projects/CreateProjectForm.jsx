import RHFSelection from '../../ui/RHFSelection';
import TextField from '../../ui/TextField';
import { useForm } from 'react-hook-form';
export default function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name='title'
        validationSchema={{
          required: 'عنوان ضروری است',
          minLength: { value: 10, message: 'حداقل 10 کاراکتر' },
        }}
        label='عنوان پروژه'
        required
        errors={errors}
        register={register}
      />
      <TextField
        name='description'
        validationSchema={{
          required: 'توضیحات ضروری است',
          minLength: { value: 10, message: 'حداقل 10 کاراکتر' },
        }}
        label='توضیحات پروژه'
        required
        errors={errors}
        register={register}
      />
      <TextField
        type='number'
        name='budget'
        validationSchema={{
          required: 'بودجه ضروری است',
        }}
        label='بودجه پروژه'
        required
        errors={errors}
        register={register}
      />
      {console.log(register)}
      <RHFSelection
        name='category'
        validationSchema={{
          required: 'دسته بندی ضروری است',
        }}
        label=' دسته بندی'
        required
        options={[]}
        errors={errors}
        register={register}
      />
      <button className='btn btn--primary btn--block ' type='submit'>
        ذخیره
      </button>
    </form>
  );
}
