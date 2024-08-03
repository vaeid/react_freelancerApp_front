import UsersTable from '../features/admin/users/UsersTable';
import ContentHeader from './../ui/ContentHeader';

export default function Users() {
  return (
    <div>
      <ContentHeader title='کاربران' description='لیست کاربران را ببینید' />
      <UsersTable />
    </div>
  );
}
