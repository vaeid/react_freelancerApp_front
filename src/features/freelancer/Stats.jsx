import { HiBookOpen, HiCollection, HiOutlineViewGrid } from 'react-icons/hi';
import { PROPOSAL } from '../../config/noms';
import Stat from '../../ui/Stat';
import { toPersianNumbersWithComma } from '../../utils/stringUtils';
export default function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((proposal) => proposal.status === PROPOSAL.STATUS.ACCEPTED);
  const numOfAcceptedProposals = acceptedProposals.length;
  const balance = acceptedProposals.reduce((acc, curr) => curr.price + acc, 0);

  return (
    <div className='grid grid-cols-2  xl:grid-cols-3 gap-8 text-secondary-500'>
      <Stat title='درخواست ها' value={numOfProposals}>
        <div className='row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-primary-700 bg-primary-100'>
          <HiOutlineViewGrid className='w-20 h-20 ' />
        </div>
      </Stat>
      <Stat title='درخواست های تایید شده' value={numOfAcceptedProposals}>
        <div className='row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-yellow-700 bg-yellow-100'>
          <HiBookOpen className='w-20 h-20 ' />
        </div>
      </Stat>
      <Stat title='درآمد ' value={toPersianNumbersWithComma(balance)}>
        <div className='row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-green-700 bg-green-100'>
          <HiCollection className='w-20 h-20 ' />
        </div>
      </Stat>
    </div>
  );
}
