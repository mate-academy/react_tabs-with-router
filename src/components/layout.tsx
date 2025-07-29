import { Outlet } from 'react-router-dom';
import { TopBar } from './topBar';

export const LayOut = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};
