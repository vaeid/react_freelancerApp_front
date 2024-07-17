import ProjectHeader from '../features/project/ProjectHeader';
import ProposalsTable from '../features/project/ProposalsTable';
import useProject from '../features/project/useProject';
import Loading from '../ui/Loading';
import ContentHeader from '../ui/ContentHeader';

export default function Project() {
  const { project, isLoading } = useProject();

  if (isLoading) return <Loading width='100' spinner='InfinitySpin' />;

  return (
    <div>
      <ContentHeader title={project.title} description={project.description} isBack={true} />
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}
