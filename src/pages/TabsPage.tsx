import { useParams } from 'react-router-dom';
import { TabTable } from '../components/TabTable';
import { tabs } from '../utils/tabsList';

export const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabTable
        tabs={tabs}
        selectedTabId={tabId}
      />
    </>
  );
};
