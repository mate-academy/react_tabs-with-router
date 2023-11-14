import { useParams } from 'react-router-dom';
import { tabs } from '../api/Tabs';
import { TabItem } from './TabItem';

export const Tabs = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(selTab => selTab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? `${selectedTab.content}`
          : 'Please select a tab'}
      </div>
    </>
  );
};
