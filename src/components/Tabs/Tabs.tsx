import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Tab } from '../../types/Tab';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  return (
    <section className="Tabs">
      <ul className="Tabs__list">
        {tabs.map(({ id, title }) => (
          <li key={id} className="Tabs__tab-item">
            <NavLink
              to={id}
              className={({ isActive }) => classNames('Tabs__link', { 'Tabs__link--active': isActive })}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
