import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab as TabInterface } from '../../types/Tab';
import { Tab } from './Tab/Tab';

interface Props {
  tabs: TabInterface[],
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTabId = tabId !== undefined
    ? tabId
    : null;

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <Tab
              tab={tab}
              selectedTabId={selectedTabId}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          selectedTabId
            ? selectedTab?.content
            : 'Please select a tab'
        }
      </div>
    </>
  );
};
