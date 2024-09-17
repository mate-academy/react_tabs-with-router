import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { tabs } from '../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const isTabValid = tabId
    ? tabs.some(tab => tab.id === tabId)
    : false;

  const selectedTab = isTabValid
    ? tabs.find(tab => tab.id === tabId)
    : null;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <Tabs tabs={tabs} tabId={tabId} />
        <div className="block" data-cy="TabContent">
          {!selectedTab ? (
            'Please select a tab'
          ) : (
            selectedTab.content
          )}
        </div>
      </div>
    </div>
  );
};
