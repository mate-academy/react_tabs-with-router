import { useParams } from 'react-router-dom';
import { TabsBoxes, tabs } from './TabsBoxes';

export const TabsPages = () => {
  const { tabId = '' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsBoxes selectedTabId={tabId} />

      <div className="block" data-cy="TabContent">
        {(tabId !== '' && selectedTab)
          ? selectedTab?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
