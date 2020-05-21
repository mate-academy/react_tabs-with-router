import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  currentTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, currentTabId }) => (
  <>
    {tabs.map(tab => (
      <NavLink to={`/tabs/${tab.id}`} key={tab.id} id={tab.id}>{tab.title}</NavLink>
    ))}

    <section>
      {tabs.find(tab => tab.id === currentTabId)?.content}

    </section>
  </>
);
