import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Tab } from './Tab';
import { TabsContext } from '../store/TabsContext';

export const TabsPage = () => {
  const { tabs } = useContext(TabsContext);
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!selectedTab
          ? 'Please select a tab'
          : selectedTab.content}
      </div>
    </div>
  );
};
