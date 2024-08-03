import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { changeUserStatusApi } from '../../../services/authService';

export default function useUserStatus() {
  const { mutate: changeStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeUserStatusApi,

    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { changeStatus, isUpdating };
}
