import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item', { 'is-active': isActive },
);

export const Navigation:React.FC = () => (
  <div className="navbar-brand">
    <NavLink
      to="/"
      className={getLinkClass}
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className={getLinkClass}
    >
      Tabs
    </NavLink>
  </div>
);
