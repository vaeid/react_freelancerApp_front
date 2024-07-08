import Table from '../../../ui/Table';
import { toLocalDateShort } from '../../../utils/dateUtils';
import { toPersianNumbersWithComma, truncateText } from '../../../utils/stringUtils';

export default function ProjectRow({ project, index }) {
  return (
    <Table.Row>
      <td className='py-4 pr-2'>{index}</td>
      <td>{truncateText(project.title, 20)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className='flex flex-wrap items-center gap-2 max-w-[200px]'>
          {project.tags.map((tag) => (
            <span key={tag} className='badge badge--secondary'>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>
        {project.status === 'OPEN' ? (
          <span className='badge badge--success'>باز</span>
        ) : (
          <span className='badge badge--danger'>بسته</span>
        )}
      </td>
      <td className='cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='size-6 text-blue-500 inline'
        >
          <path d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
        </svg>
      </td>
    </Table.Row>
  );
}
