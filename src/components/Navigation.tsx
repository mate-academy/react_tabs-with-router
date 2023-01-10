import { FC } from 'react';
import { PageNavigation } from './PageNavigation';

export const Navigation: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavigation to="/" content="Home" />
          <PageNavigation to="/tabs" content="Tabs" />
        </div>
      </div>
    </nav>
  );
};
