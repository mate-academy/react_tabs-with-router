import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabPage } from '../TabPage';

interface Props {
  tabs:Tab[],
}

export const TabsPage:FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const findSelectedTab = (id: string) => {
    return tabs.find(tab => tab.id === id);
  };

  const selectedTab = tabId ? findSelectedTab(tabId) : null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabPage
              key={tab.id}
              tab={tab}
              tabId={tabId}
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
