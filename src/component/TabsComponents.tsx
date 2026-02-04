import { Tab as TabType } from '../types/Tab';
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tabs, TabList, Tab as RTab } from 'react-tabs';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsComponent: React.FC<{ selectedId?: string }> = ({
  selectedId,
}) => {
  const selectedIndex = tabs.findIndex(t => t.id === selectedId);
  const selected = tabs.find(t => t.id === selectedId);

  // Always use controlled mode to avoid switching between controlled/uncontrolled.
  // Use -1 to represent "no selection" when no valid tabId is present.
  const controlledIndex = selectedIndex >= 0 ? selectedIndex : -1;

  return (
    <>
      <div className="tabs is-boxed">
        <Tabs selectedIndex={controlledIndex}>
          <TabList>
            {tabs.map(tab => (
              <RTab
                key={tab.id}
                data-cy="Tab"
                className=""
                selectedClassName="is-active"
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </RTab>
            ))}
          </TabList>
        </Tabs>
      </div>

      <div className="block" data-cy="TabContent">
        {selected ? selected.content : 'Please select a tab'}
      </div>
    </>
  );
};
