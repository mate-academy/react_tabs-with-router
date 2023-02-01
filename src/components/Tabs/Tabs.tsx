import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  tabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({
            'is-active': tabId === tab.id,
          })}
        >
          <Link to={`../${tab.id}`}>{ tab.title }</Link>
        </li>
      ))}
    </ul>
  </div>
);
