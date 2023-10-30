import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink, Outlet, useNavigate, useParams,
} from 'react-router-dom';
import classNames from 'classnames';
import { useEffect } from 'react';

export const App = () => {
  const { home } = useParams();
  const navigate = useNavigate();

  const isPageActive = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', {
      'is-active': isActive,
    });
  };

  useEffect(() => {
    navigate('/');
  }, [home]);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={isPageActive} end>Home</NavLink>
            <NavLink to="/tabs" className={isPageActive} end>Tabs</NavLink>
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
