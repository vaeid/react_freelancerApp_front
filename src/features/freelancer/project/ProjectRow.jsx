import { MdAssignmentAdd } from 'react-icons/md';
import Table from '../../../ui/Table';
import Modal from '../../../ui/Modal';
import { toLocalDateShort } from '../../../utils/dateUtils';
import { toPersianNumbersWithComma, truncateText } from '../../../utils/stringUtils';
import { useState } from 'react';
import CreateProposal from '../../proposals/CreateProposal';
import { PROJECT } from '../../../config/noms';

export default function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td className='py-4 pr-2'>{index + 1}</td>
      <td>{truncateText(project.title, 20)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>

      <td>
        {project.status === PROJECT.STATUS.OPEN ? (
          <span className='badge badge--success'>باز</span>
        ) : (
          <span className='badge badge--danger'>بسته</span>
        )}
      </td>

      <td className='cursor-pointer'>
        <div className='flex gap-x-6 items-center'>
          <button onClick={() => setOpen(true)}>
            <MdAssignmentAdd className='w-5 h-5 text-primary-900' />
          </button>
        </div>
        <Modal open={open} onClose={() => setOpen(false)} title={`ارسال پیشنهاد برای  ${project.title}`}>
          <CreateProposal project={project} onClose={() => setOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
}
