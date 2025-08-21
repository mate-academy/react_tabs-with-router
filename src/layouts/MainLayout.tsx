import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

function MainLayout() {
  return (
    <>
      <Menu />
      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
