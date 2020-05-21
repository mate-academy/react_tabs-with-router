import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  currentTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, currentTabId }) => (
  <>
    <ul className="tabs__list">
      {tabs.map((tab) => (
        <NavLink
          to={`/tabs/${tab.id}`}
          className="tabs__link"
          key={tab.id}
          id={tab.id}
          activeClassName="tabs__link--active"
        >
          {tab.title}
        </NavLink>
      ))}
    </ul>
    <section className="tabs__content">
      {tabs.find((tab) => tab.id === currentTabId)?.content}
    </section>
  </>
);
