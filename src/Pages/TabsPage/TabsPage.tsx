import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { getCurrentTabContent } from '../../Utils/helpers';
import { TabLabel } from '../../Components/TabLabel';

interface Props {
  tabs: Tab[]
}

export const TabsPage: React.FC<Props> = React.memo(({ tabs }) => {
  const { tabId: selectedTabId = '' } = useParams();
  const content = getCurrentTabContent(tabs, selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabLabel
              key={tab.id}
              tab={tab}
              selectedTabId={selectedTabId}
            />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
});
