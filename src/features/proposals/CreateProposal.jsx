import ProjectHeader from './../project/ProjectHeader';
import TextField from './../../ui/TextField';
import { useForm } from 'react-hook-form';
import UseCreateProposal from './useCreateProposal';
import Loading from '../../ui/Loading';
function CreateProposal({ project, onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { createProposal, isCreating } = UseCreateProposal();
  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId: project._id },
      {
        onSuccess: () => {
          onClose();
          reset();
        },
      }
    );
  };
  return (
    <div>
      <ProjectHeader project={project} />
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <TextField
          validationSchema={{
            required: 'توضیحات ضروری است',
          }}
          required
          errors={errors}
          label='توضیحات'
          name='description'
          register={register}
        />
        <TextField
          validationSchema={{
            required: 'قیمت ضروری است',
          }}
          required
          errors={errors}
          label='قیمت'
          name='price'
          type='number'
          register={register}
        />
        <TextField
          validationSchema={{
            required: 'مدت زمان انجام  ضروری است',
          }}
          required
          errors={errors}
          register={register}
          label='مدت زمان انجام به روز'
          name='duration'
          type='number'
        />
        {isCreating ? <Loading /> : <button className='btn btn--block btn--primary'>ارسال پیشنهاد</button>}
      </form>
    </div>
  );
}

export default CreateProposal;
