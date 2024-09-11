import { useParams } from 'react-router-dom';
import { TabContent } from '../components/TabContent';
import { TabItem } from '../components/TabItem';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem key={tab.id} tab={tab} activeTabId={tabId} />
          ))}
        </ul>
      </div>
      <TabContent activeTabContent={activeTabContent} />
    </>
  );
};
