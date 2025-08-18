import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from '../components/Tabs/Tabs';

type Props = {
  tabs: Tab[];
};

export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams();

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={tabId} onTabSelected={() => {}} />
    </div>
  );
};
