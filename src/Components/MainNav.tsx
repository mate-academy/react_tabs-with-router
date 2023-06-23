import { PageNavlink } from './PageNavlink';

export const MainNav: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavlink to="/" text="Home" />
        <PageNavlink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
