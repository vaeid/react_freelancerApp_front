import { useForm } from 'react-hook-form';
import RHFSelection from '../../ui/RHFSelection';

import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useProposalStatus from './useProposalStatus';
import Loading from '../../ui/Loading';
const options = [
  { label: 'رد شده', value: 0 },
  { label: 'در انتظار تایید', value: 1 },
  { label: 'تایید شده', value: 2 },
];
export default function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { changeStatus, isUpdating } = useProposalStatus();
  const onSubmit = (data) => {
    changeStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: (data) => {
          onClose();
          toast.success(data.message);
          queryClient.invalidateQueries({ queryKey: ['project', projectId] });
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
