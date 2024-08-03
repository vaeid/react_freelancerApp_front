import ProposalsTable from '../features/proposals/ProposalsTable';
import ContentHeader from '../ui/ContentHeader';

export default function Proposals() {
  return (
    <div>
      <ContentHeader title=' پروپوزال ها ' description='درخواست هایی که ثبت کرده اید را ببینید' />
      <ProposalsTable />
    </div>
  );
}
