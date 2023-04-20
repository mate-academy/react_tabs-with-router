import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { TabItem } from '../TabItem';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type TabsParams = {
  tabId: string,
};

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<TabsParams>();

  const selectedTabContent = useMemo(
    () => tabs.find(tab => tab.id === tabId)?.content,
    [tabId],
  );

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <TabItem
              key={id}
              id={id}
              title={title}
              isSelected={tabId === id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent
          || 'Please select a tab'}
      </div>
    </div>
  );
};
