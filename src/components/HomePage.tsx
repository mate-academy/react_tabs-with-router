import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const HomePage = () => (
  <>
    <Navigation />
    <h1 className="title">Home page</h1>
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
