import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', title: 'Home', end: true },
  { to: '/tabs', title: 'Tabs', end: false },
];

export const Navigation = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? 'navbar-item is-active' : 'navbar-item'
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);
