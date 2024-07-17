import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { changeProposalStatusApi } from '../../services/proposalServics';

export default function useProposalStatus() {
  const { mutate: changeStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeProposalStatusApi,

    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { changeStatus, isUpdating };
}
