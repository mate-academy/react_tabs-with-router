import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { tabs } from '../api/tabs';
import { TabsList } from './TabsList';

export const TabsComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>({
    id: 'tab-0', title: '', content: 'Please select a tab',
  });
  const { chosenTabId } = useParams<{ chosenTabId: string; }>();

  useEffect(() => {
    const tabOpened = tabs.find(tab => tab.id === chosenTabId);

    if (tabOpened) {
      setSelectedTab(tabOpened);
    }
  }, [chosenTabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList
        chosenTabId={chosenTabId}
      />

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </>
  );
};
