import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  tabId: string
};

export const Tabs: React.FC<Props> = ({ tabs, tabId = 0 }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classNames({ 'is-active': tabId === tab.id })}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
