import { Link, useParams } from 'react-router-dom';
import { Tabs, Tab, TabList } from 'react-tabs';
import { Tab as TabType } from '../types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const tab = tabId || '';
  const selectedTab = tabs.find(t => t.id === tab);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs className="tabs is-boxed">
        <TabList>
          {tabs.map(t => (
            <Tab
              key={t.id}
              data-cy="Tab"
              className={t.id === selectedTab?.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${t.id}`}>{t.title}</Link>
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
