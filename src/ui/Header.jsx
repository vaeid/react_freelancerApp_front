import useUser from '../features/auth/useUser';

export default function Header() {
  const { data } = useUser();
  console.log(data);
  return <div>Header</div>;
}
