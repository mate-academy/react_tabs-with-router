import { LinkPage } from '../LinkPage/LinkPage';

export const NavBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <LinkPage to="/" text="Home" />
          <LinkPage to="/tabs" text="Tabs" />
          {/* <NavLink
            to='/'
            className={({ isActive }) =>(
            isActive ? 'navbar-item is-active' : 'navbar-item'
          )}
         >
            Home
          <NavLink />
          <NavLink
            to='/'
            className={({ isActive }) =>(
            isActive ? 'navbar-item is-active' : 'navbar-item'
          )}
         >
            Tabs
          <NavLink /> */}
        </div>
      </div>
    </nav>
  );
};
