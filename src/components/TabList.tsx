import React from 'react';
import { Tab } from '../types/Tab';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const TabList = ({
  tabs,
  selectedTabId,
}: {
  tabs: Tab[];
  selectedTabId: string | undefined;
}) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(item => (
        <li
          data-cy="Tab"
          key={item.id}
          className={classNames({
            'is-active': item.id === selectedTabId,
          })}
        >
          <Link to={`/tabs/${item.id}`}> {item.title} </Link>
        </li>
      ))}
    </ul>
  </div>
);
