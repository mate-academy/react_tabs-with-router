import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

type TabType = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: TabType[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({ 'is-active': tabId === tab.id })}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
