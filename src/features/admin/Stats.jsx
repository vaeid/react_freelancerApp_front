import { HiBookOpen, HiOutlineViewGrid, HiUsers } from 'react-icons/hi';
import Stat from '../../ui/Stat';
import { toPersianNumbersWithComma } from '../../utils/stringUtils';
export default function Stats({ proposals, projects, users }) {
  return (
    <div className='grid grid-cols-2  xl:grid-cols-3 gap-8 text-secondary-500'>
      <Stat title='کاربران ' value={toPersianNumbersWithComma(users.length)}>
        <div className='row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-green-700 bg-green-100'>
          <HiUsers className='w-20 h-20 ' />
        </div>
      </Stat>
      <Stat title='پروژه ها' value={projects.length}>
        <div className='row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-primary-700 bg-primary-100'>
          <HiOutlineViewGrid className='w-20 h-20 ' />
        </div>
      </Stat>
      <Stat title='درخواست ها' value={proposals.length}>
        <div className='row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-yellow-700 bg-yellow-100'>
          <HiBookOpen className='w-20 h-20 ' />
        </div>
      </Stat>
    </div>
  );
}
