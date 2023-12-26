import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/home') {
      navigate('/');
    }
  });

  return (
    <h1 className="title">Page not found</h1>
  );
};
