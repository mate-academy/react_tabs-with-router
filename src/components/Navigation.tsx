import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationItem to="/" content="Home" />
          <NavigationItem to="/tabs" content="Tabs" />
        </div>
      </div>
    </nav>
  );
};
