import useToggleProjectStatus from './useToggleProjectStatus';
import Loading from '../../ui/Loading';
import Toggle from '../../ui/Toggle';

export default function ToggleProjectStatus({ project }) {
  const { toggleStatus, isUpdating } = useToggleProjectStatus();
  const status = project.status === 'OPEN' ? 'CLOSED' : 'OPEN';
  const toggleHandler = () => {
    toggleStatus({ id: project._id, data: { status } });
  };
  if (isUpdating) return <Loading width='100' spinner='InfinitySpin' />;
  return (
    <Toggle enabled={project.status === 'OPEN'} onChange={toggleHandler} text={{ enabled: 'باز', disable: 'بسته' }} />
  );
}
