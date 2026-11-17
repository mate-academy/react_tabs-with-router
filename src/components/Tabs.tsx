import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId?: string;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={classNames({
            'is-active': tab.id === selectedTabId,
          })}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
