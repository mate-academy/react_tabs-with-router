import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabInfo } from '../TabInfo';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

function getTabById(tabId: string): Tab | null {
  return tabs.find(tab => tab.id === tabId) || null;
}

export const TabsPage = () => {
  const { tabId } = useParams();
  const [currentTab, setCurrentTab] = useState<Tab | null>(null);

  useEffect(() => {
    if (tabId) {
      setCurrentTab(getTabById(tabId));
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo tab={tab} isActive={tab.id === tabId} key={tab.id} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
