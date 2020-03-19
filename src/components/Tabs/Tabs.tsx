import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  tabs: Tab[];
  TabId: string;
}

export const Tabs: FC<Props> = ({ tabs, TabId }) => (
  <>
    <section className="section">
      {tabs.map((tab) => (
        <NavLink
          to={`/tabs/${tab.id}`}
          key={tab.id}
          className="tabs"
          activeClassName="tabs-active"
        >
          {tab.title}
        </NavLink>
      ))}
    </section>
    <p className="text">
      {
        tabs.find(tab => tab.id === TabId)?.content
      }
    </p>
  </>
);
