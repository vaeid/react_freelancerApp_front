import DashboardHeader from './DashboardHeader';
import Stats from './Stats';
import useOwnerProjects from '../projects/useOwnerProjects';
import Loading from '../../ui/Loading';

export default function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}
