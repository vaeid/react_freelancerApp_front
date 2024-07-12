import { useQuery } from '@tanstack/react-query';
import { getFRFProposalsApi } from '../../services/proposalServics';

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ['frl-proposals'],
    queryFn: getFRFProposalsApi,
  });
  const { proposals } = data || {};
  return { isLoading, proposals };
}
