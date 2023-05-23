import { useParams } from 'react-router-dom';
import { TabsList } from '../../components/TabsList';
import { getTabs } from '../../api/tabs';

export const TabsPage = () => {
  const { tabId = '' } = useParams();
  const tabs = getTabs();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <TabsList tabs={tabs} selectedId={tabId} />
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
