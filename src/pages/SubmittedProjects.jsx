import ProjectsHeader from '../features/freelancer/project/ProjectsHeader';
import ProjectsTable from '../features/freelancer/project/ProjectsTable';
import ContentHeader from '../ui/ContentHeader';
export default function SubmitedProjects() {
  return (
    <div>
      <ContentHeader title='   پروژه ها' description='پروژه های  ثبت  شده را ببینید' />
      <ProjectsHeader />
      <ProjectsTable />
    </div>
  );
}
