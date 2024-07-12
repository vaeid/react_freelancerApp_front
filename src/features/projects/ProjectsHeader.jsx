import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import Modal from '../../ui/Modal';
import CreateProjectForm from './CreateProjectForm';

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex items-center justify-end mb-8'>
      <Modal title='اضافه کردن پروژه جدید' open={open} onClose={() => setOpen(false)}>
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button onClick={() => setOpen(true)} className='btn btn--primary flex items-center gap-x-2 '>
        <HiOutlinePlus />
        <span>اضافه کردن پروژه</span>
      </button>
    </div>
  );
}
export default ProjectsHeader;
