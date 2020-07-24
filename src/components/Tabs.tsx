import React, { FC } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Tab } from '../interfaces/TabInterface';

interface Props {
  tabs: Tab[];
}

export const Tabs: FC<Props> = ({ tabs }) => {
  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink to={`/tabs/${tab.id}`} activeClassName="selected">{tab.title}</NavLink>
          </li>
        ))}
      </ul>

      {tabs.map(tab => (
        <Route path={`/tabs/${tab.id}`} render={() => <div>{tab.content}</div>} />
      ))}
    </div>
  );
};
