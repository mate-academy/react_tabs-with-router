import { useMatch } from 'react-router-dom';
import { Tabs } from '../components/Tabs/Tabs';
import { tabs } from '../utils/tabs';

export const TabsPage = () => {
  const match = useMatch('/tabs/:tabId');

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} selectedTab={match?.params.tabId} />
    </>
  );
};
