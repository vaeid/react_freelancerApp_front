// import Stats from './Stats';
import useProposals from '../proposals//useProposals';
import Loading from '../../ui/Loading';
import ContentHeader from '../../ui/ContentHeader';
import useProjects from '../../hooks/useProjects';
import useUsers from './useUsers';
import Stats from './Stats';

export default function DashboardLayout() {
  const { isLoading: isLoadingProposals, proposals } = useProposals();
  const { isLoading: isLoadingProjects, projects } = useProjects();
  const { isLoading: isLoadingUsers, users } = useUsers();

  if (isLoadingProposals || isLoadingProjects || isLoadingUsers) return <Loading />;
  return (
    <div>
      <ContentHeader title='آمار کلی' description='در یک نگاه آمار خود را ببینید' />
      <Stats proposals={proposals} projects={projects} users={users} />
    </div>
  );
}
