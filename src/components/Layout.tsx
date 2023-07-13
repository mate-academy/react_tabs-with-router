import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => (
  <>
    <NavBar />
    <section className="section">
      <div className="container">
        <Outlet />
      </div>
    </section>
  </>
);
