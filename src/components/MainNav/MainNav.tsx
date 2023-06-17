import { PageNavLink } from '../PageNavLink';

export const MainNav: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <ul className="navbar-brand">
        <li>
          <PageNavLink
            to="/"
            text="Home"
          />
        </li>
        <li>
          <PageNavLink
            to="/tabs"
            text="Tabs"
          />
        </li>
      </ul>
    </div>
  </nav>
);
