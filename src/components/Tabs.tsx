import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';


interface Props {
  tabs: Tab[];
  activeTab: string;
}

export const Tabs: FC<Props> = ({ tabs, activeTab }) => {
  const tabContent = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="row">
      <div className="col s12">
        <ul className="tabs tab-demo z-depth-2">
          {tabs.map(tab => (
            <li className={`tab col s${12 / tabs.length}`} key={tab.id}>
              <NavLink to={`/tabs/${tab.id}`} activeClassName="active">{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="col s12">{tabContent?.content}</div>
    </div>
  );
};
