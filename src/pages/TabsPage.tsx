import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from '../components/Tabs';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} tabId={tabId ?? ''} />

      <div className="block" data-cy="TabContent">
        {activeTab?.content ?? 'Please select a tab'}
      </div>
    </>
  );
};
