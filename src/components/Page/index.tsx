import { Outlet } from 'react-router-dom';

export const Page = () => (
  <div className="section">
    <div className="container">
      <Outlet />
    </div>
  </div>
);
