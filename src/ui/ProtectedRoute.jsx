import { useEffect } from 'react';
import useAuthorize from '../features/auth/useAuthorize';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, isAuthorized, isVerified } = useAuthorize();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate('/auth');
    if (!isLoading && !isAuthorized) navigate('/not-access');
    if (!isLoading && !isVerified) navigate('/not-verified');
  }, [isLoading, isAuthenticated, isAuthorized, navigate, isVerified]);

  if (isLoading) return <Loading />;
  return children;
}

export default ProtectedRoute;
