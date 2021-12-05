import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<Tab['id']>();
  const selectedTab: Tab | null = tabs.find((tab) => tab.id === tabId) || null;

  return (
    <section className="Tabs">
      <ul className="Tabs__list">
        {tabs.map(({ id, title }) => (
          <li className="Tabs__tab-item">
            <NavLink
              to={id}
              className={({ isActive }) => classNames('Tabs__link', { 'Tabs__link--active': isActive })}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>

      {selectedTab && (
        <p className="Tabs__tab-content">{selectedTab.content}</p>
      )}
    </section>
  );
};
