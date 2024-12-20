/* eslint-disable import/no-extraneous-dependencies */
import cn from 'classnames';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../context/TabsContext';

export const Tabs: React.FC = () => {
  const { tabs, setActiveTab } = useContext(TabsContext);
  const { tabId } = useParams();
  const activeTab = !tabId ? null : tabs.find(tab => tab.id === tabId);

  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            key={tab.id}
            className={cn({ 'is-active': activeTab?.id === tab.id })}
            data-cy="Tab"
            onClick={() => setActiveTab(tab)}
          >
            <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
