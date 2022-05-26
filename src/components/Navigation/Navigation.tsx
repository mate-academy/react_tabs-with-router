import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = () => (
  <nav className="App__navigation">
    <NavLink
      to="/"
      className={
        ({ isActive }: { isActive: boolean }): string | undefined => {
          return isActive
            ? 'App__navigation-link active'
            : 'App__navigation-link';
        }
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/tabs"
      className={
        ({ isActive }: { isActive: boolean }): string | undefined => {
          return isActive
            ? 'App__navigation-link active'
            : 'App__navigation-link';
        }
      }
    >
      Tabs
    </NavLink>
  </nav>
);
