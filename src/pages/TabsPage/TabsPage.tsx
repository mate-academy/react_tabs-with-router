import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../../data/tabs';
import { Tab } from '../../types/Tab';

export const TabsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': activeTab?.id === tab.id,
                })}
              >
                <NavLink to={`${tab.id}`} onClick={() => setActiveTab(tab)}>
                  {tab.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
