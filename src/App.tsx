import { Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <Navigation />
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
