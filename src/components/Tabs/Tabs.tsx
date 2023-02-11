import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from '../TabItem/TabItem';
import { Tab } from '../../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = memo(() => {
  const findTabById = (id: string): Tab | undefined => {
    return tabs.find((tab) => tab.id === id);
  };

  const { tabId = '' } = useParams();
  const isContentExist = findTabById(tabId)?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabItem
              tab={tab}
              currentTabId={tabId}
              key={tab.id}
            />
          ))}
        </ul>

      </div>

      {
        isContentExist
          ? (
            <div className="block" data-cy="TabContent">
              {findTabById(tabId)?.content}
            </div>
          ) : (
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )
      }
    </>
  );
});
