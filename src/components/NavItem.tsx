import { NavLink, useMatch } from 'react-router-dom';
import classNames from 'classnames';

interface TabItemProps {
  to: string;
  label: string;
}
export const NavItem: React.FC<TabItemProps> = ({ to, label }) => {
  const match = useMatch(`/tabs/${to}`);

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': match })}>
      <NavLink to={to}>{label}</NavLink>
    </li>
  );
};
