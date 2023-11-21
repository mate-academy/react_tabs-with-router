import { Outlet } from 'react-router-dom';

export const TabsPage = () => {
  return (
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
