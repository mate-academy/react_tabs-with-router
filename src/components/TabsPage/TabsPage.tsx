import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { Tabs } from '../Tabs';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} activeTab={activeTab} />

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
