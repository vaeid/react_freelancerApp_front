import { HiArrowRight } from 'react-icons/hi';
import useMoveBack from '../../hooks/useMoveBack';
export default function ProjectHeader({ project }) {
  const moveBack = useMoveBack();

  return (
    <div className='mb-8'>
      <button className='' onClick={moveBack}>
        <HiArrowRight className='w-5 h-5 text-secondary-500' />
      </button>
      <h2 className='text-bold text-xl mb-4 text-secondary-700'>{project.title}</h2>
      <p className='mb-4 text-bold text-secondary-500'>{project.budget}</p>
      <p className='mb-4 text-bold text-secondary-500'>{project.deadline}</p>
      <p className='mb-4 text-bold text-secondary-500'>{project.status}</p>
      <p className='mb-4 text-bold text-secondary-500'>{project.category.title}</p>
      <p className='mb-4 text-bold text-secondary-500'>
        {project.tags.map((tag) => (
          <span key={tag} className='badge badge--secondary'>
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
}
