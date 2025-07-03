import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { tabs } from '../consts';

export const TabPage = () => {
  const { tabId: activeTabId } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTabSelected = (_tabId: string) => {
    // You can implement navigation or any other logic here
    // For example, navigate to the tab route if using react-router
    // navigate(`/tabs/${tabId}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={handleTabSelected}
      />
    </>
  );
};
