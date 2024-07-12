import Empty from '../../ui/Empty';
import Loading from '../../ui/Loading';
import Table from '../../ui/Table';
import ProposalRow from './ProposalRow';
import useProposals from './useProposals';

export default function ProposalsTable() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;
  if (proposals.length === 0) return <Empty resourceName='پروژه' />;
  return (
    <Table>
      <Table.Header>
        <th className='pb-4'>#</th>
        <th> توضیحات</th>
        <th> زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow proposal={proposal} index={index} key={proposal._id} />
        ))}
      </Table.Body>
    </Table>
  );
}
