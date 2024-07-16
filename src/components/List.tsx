import React from 'react';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  tabs: Tab[];
};

export const List: React.FC<Props> = ({ tabs }) => {
  const { tabID } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabID);
  const content = selectedTab ? selectedTab.content : null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === tabID })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`../${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
