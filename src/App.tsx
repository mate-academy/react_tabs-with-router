import cn from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink,
  Navigate,
  Outlet,
  useParams,
} from 'react-router-dom';

export const App = () => {
  const { path } = useParams();
  const activeLink = ({ isActive }: { isActive: boolean }) => {
    return cn('navbar-item', { 'is-active': isActive });
  };

  if (path === 'home') {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={activeLink}>Home</NavLink>
            <NavLink to="/tabs" className={activeLink}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
