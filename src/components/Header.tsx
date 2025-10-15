import { NavLink } from 'react-router-dom';

export const Header = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/tabs', label: 'Tabs' },
  ];

  return (
    <nav className="navbar is-light is-fixed-top is-mobile has-shadow" data-cy="Nav">
      <div className="container">
        <div className="navbar-brand">
          {links.map(link => (
            <div key={link.to} className="navbar-item-wrapper">
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'navbar-item is-active' : 'navbar-item')}
              >
                {link.label}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
