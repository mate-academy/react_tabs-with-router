import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTabId = tabs.find(tab => tab.id === tabId)?.id;

  return (
    <ul>
      {tabs.map((tab: Tab) => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={cn({ 'is-active': selectedTabId === tab.id })}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};
