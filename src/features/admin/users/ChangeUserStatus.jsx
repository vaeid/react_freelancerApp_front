import { useForm } from 'react-hook-form';
import RHFSelection from '../../../ui/RHFSelection';

import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import useUserStatus from './useUserStatus';
import Loading from '../../../ui/Loading';
const options = [
  { label: 'رد شده', value: 0 },
  { label: 'در انتظار تایید', value: 1 },
  { label: 'تایید شده', value: 2 },
];
export default function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { changeStatus, isUpdating } = useUserStatus();
  const onSubmit = (data) => {
    changeStatus(
      { userId, data },
      {
        onSuccess: (data) => {
          onClose();
          toast.success(data.message);
          queryClient.invalidateQueries({ queryKey: ['users'] });
        },
      }
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelection
          register={register}
          name='status'
          options={options}
          validationSchema={{
            required: ' انتخاب وضعیت ضروری است',
          }}
          label=' وضعیت'
          required
        />
        <div className='mt-8'>
          {isUpdating ? <Loading /> : <button className='btn btn--block btn--primary'>تایید</button>}
        </div>
      </form>
    </div>
  );
}
