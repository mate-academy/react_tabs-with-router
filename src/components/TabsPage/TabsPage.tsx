import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from '../TabItem/TabItem';
import { tabsFromServer } from '../../api/tabsFromServer';

export const TabsPage: FC = () => {
  const { tabId = '' } = useParams();
  const selectedTab = tabsFromServer.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabsFromServer.map(tab => (
              <TabItem tab={tab} key={tab.id} />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
