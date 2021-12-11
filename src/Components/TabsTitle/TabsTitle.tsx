import { NavLink } from 'react-router-dom';
import { Tab } from '../../Types/Type';

type Props = {
  tabs: Tab[],
};

export const TabsTitle: React.FC<Props> = ({ tabs }) => {
  return (
    <nav className="navigation">
      {tabs.map(({ id, title }) => (
        <NavLink
          to={id}
          key={id}
          className={({ isActive }) => (isActive ? 'navigation__link navigation__link--active' : 'navigation__link')}
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};
