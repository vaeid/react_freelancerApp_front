import Stats from './Stats';
import useOwnerProjects from '../projects/useOwnerProjects';
import Loading from '../../ui/Loading';
import ContentHeader from '../../ui/ContentHeader';

export default function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <ContentHeader title='آمار کلی' description='در یک نگاه آمار خود را ببینید' />
      <Stats projects={projects} />
    </div>
  );
}
