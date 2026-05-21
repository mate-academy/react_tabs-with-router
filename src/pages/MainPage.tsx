import { Outlet } from 'react-router-dom';
import { Nav } from '../components/Nav';

export const MainPage = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
