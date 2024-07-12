import { MdAssignmentAdd } from 'react-icons/md';
import Table from '../../../ui/Table';
import { toLocalDateShort } from '../../../utils/dateUtils';
import { toPersianNumbersWithComma, truncateText } from '../../../utils/stringUtils';
import { Link } from 'react-router-dom';

export default function ProjectRow({ project, index }) {
  return (
    <Table.Row>
      <td className='py-4 pr-2'>{index + 1}</td>
      <td>{truncateText(project.title, 20)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>

      <td>{project.status}</td>

      <td className='cursor-pointer'>
        <div className='flex gap-x-6 items-center'>
          <Link to={project._id}>
            <MdAssignmentAdd className='w-5 h-5 text-primary-900' />
          </Link>
        </div>
      </td>
    </Table.Row>
  );
}
