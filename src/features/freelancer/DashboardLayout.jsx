import Stats from './Stats';
import useProposals from '../proposals//useProposals';
import Loading from '../../ui/Loading';
import ContentHeader from '../../ui/ContentHeader';

export default function DashboardLayout() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;
  return (
    <div>
      <ContentHeader title='آمار کلی' description='در یک نگاه آمار خود را ببینید' />
      <Stats proposals={proposals} />
    </div>
  );
}
