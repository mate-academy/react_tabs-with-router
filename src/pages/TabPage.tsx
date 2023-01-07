import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { tabs } from '../api/tabs';

export const TabPage = () => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs}
        selectedTabId={tabId}
      />
    </>
  );
};
