import { useQuery } from '@tanstack/react-query';
import { getProjectsApi } from './../services/ProjectService';
export default function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ['owner-projects'],
    queryFn: getProjectsApi,
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
