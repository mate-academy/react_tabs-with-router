import { useEffect } from 'react';
import { tabs } from '../App';
import { Tabs } from './Tabs';
import { useParams } from 'react-router-dom';

type Props = {
  selectedTabId: string | null;
  handleSelectedTab: (id: string) => void;
};

export const TabsPage: React.FC<Props> = ({
  selectedTabId,
  handleSelectedTab,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);
  const { tabId } = useParams<{ tabId?: string }>();

  useEffect(() => {
    if (tabId && tabs.some(tab => tab.id === tabId)) {
      handleSelectedTab(tabId);
    } else if (!selectedTabId) {
      handleSelectedTab(tabs[0].id);
    }
  }, [handleSelectedTab, selectedTabId, tabId]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          selectTab={handleSelectedTab}
        />

        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
