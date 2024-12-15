import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Tab } from '../components/Tab';
import { tabs } from '../mocks/tabs';
import { Tab as TabType } from '../types/Tab';

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabType | null>(null);
  const params = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <Tab tab={tab} key={tab.id} onSelect={setSelectedTab} />
          ))}
        </ul>
      </div>

      {selectedTab && selectedTab.id === params.tabId ? (
        selectedTab?.content
      ) : (
        <div className="block" data-cy="tab-content">
          Please select a tab
        </div>
      )}
    </>
  );
};
