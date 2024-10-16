import { useParams } from 'react-router-dom';
import { TabItem } from '../components/TabItem';

export const Tabs: React.FC = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabId } = useParams();

  const selectedTabId = tabId ? tabId.slice(tabId.indexOf('-') + 1) : 0;

  const selectedTab = tabs.find(
    tab => tab.id.slice(tab.id.indexOf('-') + 1) === selectedTabId,
  );

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return <TabItem key={tab.id} tabItem={tab} />;
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!selectedTab ? 'Please select a tab' : selectedTab?.content}
      </div>
    </>
  );
};
