import { HiBookOpen, HiCollection, HiOutlineViewGrid } from 'react-icons/hi';
import { PROJECT } from '../../config/noms';
import Stat from './Stat';
export default function Stats({ projects }) {
  console.log(projects);
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((project) => project.status === PROJECT.STATUS.OPEN).length;
  const numOfProposals = projects.reduce((acc, curr) => curr.proposals.length + acc, 0);

  return (
    <div className='grid grid-cols-2  xl:grid-cols-3 gap-8 text-secondary-500'>
      <Stat title='پروژه ها' value={numOfProjects}>
        <div className='row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-primary-700 bg-primary-100'>
          <HiOutlineViewGrid className='w-20 h-20 ' />
        </div>
      </Stat>
      <Stat title='پروژه های  باز' value={numOfAcceptedProjects}>
        <div className='row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-yellow-700 bg-yellow-100'>
          <HiBookOpen className='w-20 h-20 ' />
        </div>
      </Stat>
      <Stat title='درخواست ها' value={numOfProposals}>
        <div className='row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-green-700 bg-green-100'>
          <HiCollection className='w-20 h-20 ' />
        </div>
      </Stat>
    </div>
  );
}
