import TextField from '../../ui/TextField';
import { useForm } from 'react-hook-form';
export default function CreateProjectForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <form className='space-y-4'>
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
    </form>
  );
}
