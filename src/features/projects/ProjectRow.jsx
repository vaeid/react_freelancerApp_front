import { TbPencilMinus } from 'react-icons/tb';
import Table from '../../ui/Table';
import { toLocalDateShort } from '../../utils/dateUtils';
import { toPersianNumbersWithComma, truncateText } from '../../utils/stringUtils';
import { HiOutlineTrash } from 'react-icons/hi';
import Modal from '../../ui/Modal';
import { useState } from 'react';
import ConfirmDelete from '../../ui/ConfirmDelete';

export default function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
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
        <div className='flex gap-x-6 items-center'>
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className='w-5 h-5 text-primary-900' />
            </button>
            <Modal open={isEditOpen} title={'Modal'} onClose={setIsEditOpen}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga.
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className='w-5 h-5 text-red-900' />
            </button>
            <Modal open={isDeleteOpen} title={`حذف ${project.title}`} onClose={setIsDeleteOpen}>
              <ConfirmDelete onClose={setIsDeleteOpen} />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}
