import { useParams } from 'react-router-dom';

import { Tabs } from '../components/Tabs';
import type { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();

  const activeTabId = tabs.find(tab => tab.id === tabId)?.id ?? null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} activeTabId={activeTabId} />
    </>
  );
};
