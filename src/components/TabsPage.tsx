import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from './Tabs';

type TabProps = {
  tabs: Tab[];
};

export const TabsPage = ({ tabs }: TabProps) => {
  const { tabId } = useParams();

  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} currentTab={currentTab} />
    </>
  );
};
