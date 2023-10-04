import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('..');
  }, []);

  return (
    <h1 className="title">Home page</h1>
  );
};
