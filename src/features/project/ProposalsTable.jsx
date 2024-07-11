import Empty from '../../ui/Empty';
import Table from '../../ui/Table';
import ProposalRow from './ProposalRow';
export default function ProposalsTable({ proposals }) {
  return (
    <div>
      <h2 className='text-secondary-700'>درخواست ها</h2>
      {!proposals.length ? (
        <Empty resourceName='درخواستی' />
      ) : (
        <Table>
          <Table.Header>
            <th className='pb-4'>#</th>
            <th>فریلنسر</th>
            <th>توضیحات </th>
            <th>هزینه</th>
            <th>مدت زمان</th>
            <th> وضعیت</th>
            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            {proposals.map((proposal, index) => (
              <ProposalRow proposal={proposal} index={index} key={proposal._id} />
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}
