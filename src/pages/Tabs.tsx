import classNames from 'classnames';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { TabPage } from './TabPage';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <NavLink to={tab.id}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      {activeTab ? (
        <TabPage tab={activeTab} />
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
