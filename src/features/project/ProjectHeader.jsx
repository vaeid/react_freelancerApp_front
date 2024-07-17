import { PROJECT } from '../../config/noms';
import { toLocalDateShort } from './.././../utils/dateUtils';
export default function ProjectHeader({ project }) {
  return (
    <div className='mb-8'>
      <table>
        <tbody>
          <ProjectDescRow title='بودجه'>{project.budget}</ProjectDescRow>
          <ProjectDescRow title='ددلاین'>{toLocalDateShort(project.deadline)}</ProjectDescRow>
          <ProjectDescRow title='وضعیت'>
            {project.status === PROJECT.STATUS.OPEN ? (
              <span className='badge badge--success'>باز</span>
            ) : (
              <span className='badge badge--danger'>بسته</span>
            )}
          </ProjectDescRow>
          <ProjectDescRow title='دسته بندی'>{project.category.title}</ProjectDescRow>
          <ProjectDescRow title='تگ ها'>
            {project.tags.map((tag) => (
              <span key={tag} className='badge badge--secondary'>
                {tag}
              </span>
            ))}
          </ProjectDescRow>
        </tbody>
      </table>
    </div>
  );
}
function ProjectDescRow({ title, children }) {
  return (
    <tr>
      <td className='mb-4 text-bold text-secondary-500'> {title}</td>
      <td className='mb-4 text-bold text-secondary-500' colSpan='2'>
        {children}
      </td>
    </tr>
  );
}
