import { Outlet } from 'react-router-dom';
import React from 'react';

interface HomePagesProps {
  title: string;
}

export const HomePages: React.FC<HomePagesProps> = ({ title }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      <Outlet />
    </>
  );
};
