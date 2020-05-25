import React from 'react';
import { NavLink } from 'react-router-dom';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[];
  currentTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, currentTabId }) => (
  <>
    <ul>
      {tabs.map(tab => (
        <NavLink
          to={`/tabs/${tab.id}`}
          key={tab.id}
          id={tab.id}
          className="tabs__link"
          activeClassName="tabs__link--active"
        >
          {tab.title}
        </NavLink>
      ))}
    </ul>

    <section>
      {tabs.find(tab => tab.id === currentTabId)?.content}
    </section>
  </>
);
