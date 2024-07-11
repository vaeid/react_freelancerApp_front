import ProjectHeader from '../features/project/ProjectHeader';
import ProposalsTable from '../features/project/ProposalsTable';
import useProject from '../features/project/useProject';
import Loading from '../ui/Loading';

export default function Project() {
  const { project, isLoading } = useProject();

  if (isLoading) return <Loading width='100' spinner='InfinitySpin' />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}
