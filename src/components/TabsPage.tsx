import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { Tab } from './Tab';

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab key={tab.id} tab={tab} tabId={tabId} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
