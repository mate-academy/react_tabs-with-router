import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  activeTabId?: string,
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  const isActiveTab = (tab: Tab) => tab.id === activeTabId;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classNames({ 'is-active': isActiveTab(tab) })}
          >
            <Link to={`../${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
