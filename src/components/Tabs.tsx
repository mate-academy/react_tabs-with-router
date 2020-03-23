import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../types';

interface Props {
  tabs: Tab[];
  activeTab: string;
}

export const Tabs: FC<Props> = ({ tabs, activeTab }) => (
  <>
    <div>
      {tabs.map(tab => (
        <NavLink
          to={`/tabs/${tab.id}`}
          key={tab.id}
          className="link"
          activeClassName="link--active"
        >
          {tab.title}
        </NavLink>
      ))}
    </div>
    <p>{tabs.find(tab => tab.id === activeTab)?.content}</p>
  </>
);
