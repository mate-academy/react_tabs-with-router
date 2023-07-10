import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getValidTabId = (checkTabs: Tab[], checkId: string) => (
  checkTabs.find(tabItem => tabItem.id === checkId)?.id
);

export const TabsPage = () => {
  const { tabId } = useParams();
  let validTabId = tabId;

  if (tabId) {
    validTabId = getValidTabId(tabs, tabId);
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedTabId={validTabId}
        tabs={tabs}
      />
    </>
  );
};
