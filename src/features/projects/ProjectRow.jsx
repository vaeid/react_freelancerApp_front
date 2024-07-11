import { TbPencilMinus } from 'react-icons/tb';
import Table from '../../ui/Table';
import { toLocalDateShort } from '../../utils/dateUtils';
import { toPersianNumbers, toPersianNumbersWithComma, truncateText } from '../../utils/stringUtils';
import { HiOutlineEye, HiOutlineTrash } from 'react-icons/hi';
import Modal from '../../ui/Modal';
import { useState } from 'react';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useRemoveProject from './useRemoveProject';
import CreateProjectForm from './CreateProjectForm';
import ToggleProjectStatus from './ToggleProjectStatus';
import { Link } from 'react-router-dom';

export default function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();
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
        <ToggleProjectStatus project={project} config={{ checkedText: 'باز', unCheckedText: 'بسته' }} />
      </td>
      <td>{toPersianNumbers(project.proposals.length)}</td>
      <td className='cursor-pointer'>
        <div className='flex gap-x-6 items-center'>
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className='w-5 h-5 text-primary-900' />
            </button>
            <Modal open={isEditOpen} title={`ویرایش ${project.title}`} onClose={setIsEditOpen}>
              <CreateProjectForm projectToEdit={project} onClose={() => setIsEditOpen(false)} />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className='w-5 h-5 text-red-900' />
            </button>
            <Modal open={isDeleteOpen} title={`حذف ${project.title}`} onClose={setIsDeleteOpen}>
              <ConfirmDelete
                isDeleting={isDeleting}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() => removeProject(project._id, { onSuccess: () => setIsDeleteOpen(false) })}
                resourceName={project.title}
                disabled={false}
              />
            </Modal>
          </>
          <Link to={project._id}>
            <HiOutlineEye className='w-5 h-5 text-primary-900' />
          </Link>
        </div>
      </td>
    </Table.Row>
  );
}
