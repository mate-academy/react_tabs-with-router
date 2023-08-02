import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabItem } from './TabItem';

type Props = {
  tabs: Tab[];
};

export const TabsList = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabItem
              tab={tab}
              key={tab.id}
              selectedTab={selectedTab}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
