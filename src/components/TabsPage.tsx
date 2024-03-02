import { useParams } from 'react-router-dom';
import { TabsList } from './TabsList';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabsList tab={tab} key={tab.id} currentTab={currentTab} />
          ))}
        </ul>
      </div>

      {currentTab ? (
        <div className="block" data-cy="TabContent">
          {currentTab?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
