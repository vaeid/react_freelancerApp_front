import ProjectsTable from '../features/projects/ProjectsTable';
import ProjectsHeader from '../features/projects/ProjectsHeader';
import ContentHeader from '../ui/ContentHeader';
export default function Projects() {
  return (
    <div>
      <ContentHeader title=' پروژه های شما' description='پروژه هایی که ثبت کرده اید را مشاهده و مدیریت کنید' />
      <ProjectsHeader />
      <ProjectsTable />
    </div>
  );
}
