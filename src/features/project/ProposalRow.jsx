import { TbPencilMinus } from 'react-icons/tb';
import Table from '../../ui/Table';
import { toPersianNumbers, toPersianNumbersWithComma, truncateText } from '../../utils/stringUtils';
import { HiOutlineTrash } from 'react-icons/hi';
import { useState } from 'react';
import Modal from '../../ui/Modal';
import ChangeProposalStatus from './ChangeProposalStatus';
const statusStyle = [
  { lable: 'رد شده', className: 'badge--danger' },
  { lable: 'در انتظار تایید ', className: 'badge--secondary' },
  { lable: 'تایید شده', className: 'badge--success' },
];
export default function ProposalRow({ proposal, index }) {
  const [open, setOpen] = useState(false);
  const { user, status } = proposal;
  return (
    <Table.Row>
      <td className='py-4 pr-2'>{index}</td>
      <td>{user.name}</td>
      <td>{truncateText(proposal.description, 20)}</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>{toPersianNumbers(proposal.duration)} روز</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].lable}</span>
      </td>
      <td className='cursor-pointer'>
        <>
          <Modal title='تغییر وضعیت درخواست' open={open} onClose={() => setOpen(false)}>
            <ChangeProposalStatus proposalId={proposal._id} onClose={() => setOpen(false)} />
          </Modal>
          <button className='btn btn--sm btn--primary' onClick={() => setOpen(true)}>
            تغییر وضعیت
          </button>
        </>
      </td>
    </Table.Row>
  );
}
