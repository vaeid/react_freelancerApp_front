import useUser from './useUser';

export default function UserAvatar() {
  const { data } = useUser();
  const { user } = data || {};

  return (
    <div>
      <span className='text-base text-bold'>{user?.name}</span>;
    </div>
  );
}
