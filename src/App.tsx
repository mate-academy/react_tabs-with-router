import 'bulma/css/bulma.css';
import cn from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink,
  Navigate,
  Outlet,
  useParams,
} from 'react-router-dom';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];
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
