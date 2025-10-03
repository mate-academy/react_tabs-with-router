import { useParams } from 'react-router-dom';
import { Tabs } from './Tabs';
import { tabs } from '../App';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={tabId} />
    </div>
  );
};
