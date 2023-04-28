import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabLink } from './TabLink';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId = 'tab-0' } = useParams();
  const isActiveTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <TabLink tab={tab} />
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isActiveTab
          ? isActiveTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
