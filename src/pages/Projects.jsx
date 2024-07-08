import { useState } from 'react';
import ProjectsTable from '../features/projects/ProjectsTable';
import Modal from '../ui/Modal';
import { HiOutlinePlus } from 'react-icons/hi';
import CreateProjectForm from '../features/projects/CreateProjectForm';

export default function Projects() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='font-black text-secondary-700 text-xl'>پروژه های شما</h1>
        <Modal title='اضافه کردن پروژه جدید' open={open} onClose={() => setOpen(false)}>
          <CreateProjectForm onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)} className='btn btn--primary flex items-center gap-x-2'>
          <HiOutlinePlus />
          <span>اضافه کردن پروژه</span>
        </button>
      </div>
      <ProjectsTable />
    </div>
  );
}
