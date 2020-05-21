import React from 'react';
import { NavLink } from 'react-router-dom';

type TabsProps = {
  tabs: Tab[];
  tabId: string;
};

const Tabs: React.FC<TabsProps> = ({ tabs, tabId }) => {
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h2>Tabs Page</h2>
      <ul className="tab__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tab__item"
          >
            <NavLink
              to={`/tabs/${tab.id}`}
              className="tab__link"
              activeClassName="tab__link-active"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <p className="tab__content">
        {selectedTab?.content}
      </p>
    </>
  );
};

export default Tabs;
