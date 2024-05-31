import cn from 'classnames';
import { useState } from 'react';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={cn({ 'is-active': tab === selectedTab })}
                data-cy="Tab"
                key={tab.id}
              >
                <Link to={`../${tab.id}`} onClick={() => setSelectedTab(tab)}>
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
