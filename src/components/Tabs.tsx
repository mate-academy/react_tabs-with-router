import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  tabId: string | undefined,
};

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={cn({ 'is-active': tabId === tab.id })}
          >
            <Link to={tabId ? `../${tab.id}` : tab.id}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
