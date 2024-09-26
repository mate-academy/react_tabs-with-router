import { Outlet } from 'react-router-dom';

export const Content = () => {
  return (
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
