import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabDetails } from '../components/TabDetails';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage:FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = (tab: Tab) => tabId === tab.id;
  const tabFound = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabDetails tab={tab} key={tab.id} selectedTab={selectedTab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabFound?.content || ('Please select a tab')}
      </div>
    </>
  );
};
