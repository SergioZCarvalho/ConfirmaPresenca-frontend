import { useAuthStore } from '@/store';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoot = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate('/auth');
  }, []);
  return <Outlet />;
};
export default PrivateRoot;
