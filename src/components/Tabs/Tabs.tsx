import React from 'react';
import { Tab } from '../../helpers/helper';
import { NavLink } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  tabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => (
  <>
    <h2>
      Tabs Page
    </h2>
    <ul>
      {tabs.map(tab => (
        <li key={tab.id}>
          <NavLink to={`/tabs/${tab.id}`}>
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>
    <div className="tab__content">
      {tabs.find(tab => tab.id === tabId)?.content}
    </div>
  </>
)
