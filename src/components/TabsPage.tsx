import { tabs } from './TabsArray';
import { useParams } from 'react-router-dom';
import { Tabs } from './Tabs';

type Params = {
  tabId: string | undefined;
};

export const TabsPage = () => {
  const { tabId } = useParams<Params>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabs is-boxed">
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={tabId} />

      {!selectedTab ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      )}
    </div>
  );
};
