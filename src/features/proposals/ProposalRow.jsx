import Table from '../../ui/Table';
import { toPersianNumbers, toPersianNumbersWithComma, truncateText } from '../../utils/stringUtils';
const statusStyle = [
  { lable: 'رد شده', className: 'badge--danger' },
  { lable: 'در انتظار تایید ', className: 'badge--secondary' },
  { lable: 'تایید شده', className: 'badge--success' },
];

export default function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  return (
    <Table.Row>
      <td className='py-4 pr-2'>{index}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{toPersianNumbers(proposal.duration)} روز</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].lable}</span>
      </td>
    </Table.Row>
  );
}
