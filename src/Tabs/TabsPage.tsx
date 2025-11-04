import { useParams } from 'react-router-dom';
import { Tabs, tabs } from 'react_tabs';

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} activeId={tabId} />
    </div>
  );
};
