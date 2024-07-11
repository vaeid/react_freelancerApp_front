import { useParams } from 'react-router-dom';

export default function Project() {
  const { id } = useParams();
  return <div>project</div>;
}
