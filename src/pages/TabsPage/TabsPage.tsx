import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabsTable } from '../../components/TabsTable';

export const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <TabsTable tabs={tabsFromServer} selectedTabId={tabId} />
    </div>
  );
};
