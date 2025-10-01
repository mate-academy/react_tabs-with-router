import { tabs } from '../api/tabs';
import { useParams } from 'react-router-dom';
import { TabsList } from '../components/TabsList';
import 'mate-academy/react_tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTabId = tabId || ''; // derive direto da URL

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} activeTabId={activeTabId} />
      {!tabs.find(tab => tab.id === activeTabId) && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
