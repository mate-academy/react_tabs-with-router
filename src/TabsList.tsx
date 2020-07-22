import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from './interfaces';

import './App.css';

interface Props {
  list: Tab[];
  id: string;
}

export const TabsList: React.FC<Props> = ({ list, id }) => {
  const defaultId = id === ':id' ? 'tab-1' : id;
  const currentTab = list.find(tab => tab.id === defaultId) || list[0];

  return (
    <ul>
      {
        list.map(tab => (
          <NavLink className="navig" key={tab.id} to={`${tab.id}`}>
            {tab.title}
          </NavLink>
        ))
      }
      <p className="tab-text">
        {currentTab.content}
      </p>
    </ul>
  );
};
