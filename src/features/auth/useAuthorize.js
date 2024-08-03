import { useLocation } from 'react-router-dom';
import useUser from './useUser';
import { USER } from '../../config/noms';

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  let isAuthorized = false;
  let isVerified = false;
  if (user && user.status == USER.STATUS.ACCEPTED) isVerified = true;
  if (user) {
    isAuthenticated = true;
    if (pathname.includes('admin') && user.role === USER.ROLE.ADMIN) isAuthorized = true;
    if (pathname.includes('owner') && user.role === USER.ROLE.OWNER) isAuthorized = true;
    if (pathname.includes('freelancer') && user.role === USER.ROLE.FREELANCER) isAuthorized = true;
  }
  return { isLoading, isAuthenticated, isAuthorized, isVerified, user };
}
