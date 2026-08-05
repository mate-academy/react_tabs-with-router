import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from './Tabs';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage = ({ tabs }: TabsPageProps) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <Tabs tabs={tabs} activeTabId={tabId ?? ''} />
      </div>
    </>
  );
};
