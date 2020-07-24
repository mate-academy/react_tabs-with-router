import React, { FC } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Tab } from '../interfaces/TabInterface';

interface Props {
  tabs: Tab[];
}

export const Tabs: FC<Props> = ({ tabs }) => {
  return (
    <div>
      <ul className="tabs">
        {tabs.map(tab => (
          <li className="tab col s3" key={tab.id}>
            <NavLink to={`/tabs/${tab.id}`} activeClassName="active">{tab.title}</NavLink>
          </li>
        ))}
      </ul>

      {tabs.map(tab => (
        <Route path={`/tabs/${tab.id}`} render={() => <h2>{tab.content}</h2>} />
      ))}
    </div>
  );
};
