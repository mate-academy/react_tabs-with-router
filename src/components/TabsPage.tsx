import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tabs } from '../App';
import { Tabs } from './Tabs';

type Props = {
  selectedTabId: string | null;
  handleSelectedTab: (id: string | null) => void;
};

export const TabsPage: React.FC<Props> = ({
  selectedTabId,
  handleSelectedTab,
}) => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (tabId && tabs.some(tab => tab.id === tabId)) {
      handleSelectedTab(tabId);
    } else {
      handleSelectedTab(null);
    }
  }, [handleSelectedTab, tabId]);

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          selectTab={id => {
            handleSelectedTab(id);
            navigate(`/tabs/${id}`);
          }}
        />

        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
