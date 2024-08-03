import Empty from '../../../ui/Empty';
import Loading from '../../../ui/Loading';
import Table from '../../../ui/Table';
import useUsers from '../useUsers';
import UserRow from './UserRow';

export default function UsersTable() {
  const { isLoading, users } = useUsers();
  if (isLoading) return <Loading />;
  if (users.length === 0) return <Empty resourceName='کاربر ' />;
  return (
    <Table>
      <Table.Header>
        <th className='pb-4'>#</th>
        <th> نام کاربر</th>
        <th> ایمیل </th>
        <th>موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow user={user} index={index} key={user._id} />
        ))}
      </Table.Body>
    </Table>
  );
}
