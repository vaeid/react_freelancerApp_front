import { useQuery } from '@tanstack/react-query';
import { getProjectsApi } from './../services/ProjectService';
import { useLocation } from 'react-router-dom';
export default function useProjects() {
  const location = useLocation();
  console.log(location.search);
  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjectsApi,
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
