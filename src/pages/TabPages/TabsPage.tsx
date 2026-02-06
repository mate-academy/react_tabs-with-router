import { useParams } from 'react-router-dom';
import { TabNav } from '../../components/Tab/TabNav';
import { TabsPath } from '../../types/paths';
import { Tab } from '../../types/Tab';

const TabsPage = () => {
  const tabs: Tab[] = [
    { id: TabsPath.TAB1, title: 'Tab 1', content: 'Some text 1' },
    { id: TabsPath.TAB2, title: 'Tab 2', content: 'Some text 2' },
    { id: TabsPath.TAB3, title: 'Tab 3', content: 'Some text 3' },
  ];
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <TabNav tabs={tabs} activeTabId={tabId} />
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

export default TabsPage;
