import { Tab } from './types/Tab';
import { TabComponent } from './TabComponent';
import { useParams } from 'react-router-dom';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabId ? (tabs.find(t => t.id === tabId) ?? null) : null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabComponent key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
