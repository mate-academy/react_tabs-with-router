import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: string,
};

export const TabsList: React.FC<Props> = React.memo(({ selectedTab, tabs }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({ 'is-active': selectedTab === tab.id })}
        >
          <Link to={`../${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
