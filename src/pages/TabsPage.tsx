import { useOutletContext, useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useOutletContext();

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs tabs={tabs as Tab[]} selectedTabId={tabId} />
      </div>
    </div>
  );
};
