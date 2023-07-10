import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navigate: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return null;
};
