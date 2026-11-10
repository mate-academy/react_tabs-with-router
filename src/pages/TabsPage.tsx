import { useParams } from 'react-router-dom';

import { Tabs } from '../components/Tabs';
import { tabs } from '../tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId) ?? null;

  return (
    <main className="section">
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} selectedTab={selectedTab} />
    </main>
  );
};
