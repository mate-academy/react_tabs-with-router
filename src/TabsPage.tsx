import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const [selectedTab, setSelectedTab]
  = useState<Tab | null | undefined>(tabs.find(tab => tab.id === tabId));

  const handleSelectTab = (tab: Tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    if (tabId === undefined) {
      setSelectedTab(null);
    }
  });

  return (
    <div className="TabsPage">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="tab"
              className={classNames(
                {
                  'is-active': tabId === tab.id,
                },
              )}
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => handleSelectTab(tab)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {!selectedTab && (
        <div className="block" data-cy="tab-content">
          Please select a tab
        </div>
      )}
      <div className="block" data-cy="tab-content">
        {selectedTab?.content}
      </div>
    </div>
  );
};
