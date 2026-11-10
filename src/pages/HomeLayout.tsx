import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

export function HomeLayout() {
  return (
    <>
      {<Navigation />}
      <div className="container">{<Outlet />}</div>
    </>
  );
}
