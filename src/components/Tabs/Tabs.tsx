import React from 'react';
import { useParams } from 'react-router-dom';
import { TabInfo } from '../TabInfo';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const Tabs = React.memo<Props>(({ tabs }) => {
  const { tabId = '' } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
});
