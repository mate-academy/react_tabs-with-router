import { Links } from '../types/Links';
import { NavigationLink } from './NavigationLink';

export const Navbar: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavigationLink title={Links.home} />
        <NavigationLink title={Links.tabs} />
      </div>
    </div>
  </nav>
);
