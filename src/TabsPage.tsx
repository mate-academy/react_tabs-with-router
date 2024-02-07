import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from './types/Tab';

interface Props {
  tabs: Tab[],
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId)?.content
    || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
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
              <NavLink to={`../${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>

      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab}
      </div>
    </>
  );
};
