import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageNavLink } from './PageNavLink';
import { Tab } from '../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>({
    id: 'tab-0', title: '', content: 'Please select a tab',
  });
  const { chosenTabId } = useParams<{ chosenTabId: string; }>();

  useEffect(() => {
    const tabOpened = tabs.find(tab => tab.id === chosenTabId);

    if (tabOpened) {
      setSelectedTab(tabOpened);
    }
  }, [chosenTabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <PageNavLink
              tab={tab}
              nestingLevel={2}
              chosenTabId={chosenTabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </>
  );
};
