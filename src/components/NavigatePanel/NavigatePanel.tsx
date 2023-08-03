import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const getLinkClass = (
  { isActive }: { isActive: boolean },
) => cn('navbar-item', {
  'is-active': isActive,
});

const NavigatePanel: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/tabs" className={getLinkClass}>
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);

export default NavigatePanel;
