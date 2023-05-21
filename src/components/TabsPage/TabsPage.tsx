import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from '../TabInfo/TabInfo';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: FC = () => {
  const { tabId } = useParams();
  const selectedTabs = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <TabItem tab={tab} key={tab.id} />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabs ? selectedTabs.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
