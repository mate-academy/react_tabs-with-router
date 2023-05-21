import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTab: Tab | null;
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTab }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map((tab) => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={classNames({
            'is-active': tab.id === selectedTab?.id,
          })}
        >
          <Link to={`../${tab.id}`} data-cy="TabLink">
            {tab.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
