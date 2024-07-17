import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createProposalApi } from '../../services/proposalServics';

export default function UseCreateProposal() {
  const queryClient = useQueryClient();
  const { mutate: createProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['proposals'] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { createProposal, isCreating };
}
