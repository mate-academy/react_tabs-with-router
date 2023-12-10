import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';
import { TabContent } from './TabContent';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const isTabIdValid = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <NavLink to={`/tabs/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isTabIdValid
          ? <TabContent selectedTabId={tabId} tabs={tabs} />
          : 'Please select a tab'}
      </div>

    </>
  );
};
