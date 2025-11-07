import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs tabs={tabs} activeTabId={tabId ?? ''} />
        {activeTab ? (
          <div className="block" data-cy="TabContent">
            {activeTab.content}
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </div>
  );
};
