import { useState } from 'react';
import Modal from '../../../ui/Modal';
import Table from '../../../ui/Table';
import ChangeUserStatus from './ChangeUserStatus';
const statusStyle = [
  { lable: 'رد شده', className: 'badge--danger' },
  { lable: 'در انتظار تایید ', className: 'badge--secondary' },
  { lable: 'تایید شده', className: 'badge--success' },
];

export default function UserRow({ user, index }) {
  const { status } = user;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td className='py-4 pr-2'>{index}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].lable}</span>
      </td>
      <td className='cursor-pointer'>
        <>
          <Modal title='تغییر وضعیت درخواست' open={open} onClose={() => setOpen(false)}>
            <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
          </Modal>
          <button className='btn btn--sm btn--primary' onClick={() => setOpen(true)}>
            تغییر وضعیت
          </button>
        </>
      </td>
    </Table.Row>
  );
}
