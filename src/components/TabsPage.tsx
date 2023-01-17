import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage:FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);
  const { tabId } = useParams();

  useEffect(() => {
    if (!tabId) {
      return;
    }

    const currentTab = tabs.find(tab => tab.id === tabId);

    setSelectedTab(currentTab || null);
  }, [tabId]);

  const onSelectTab = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === tab.id,
              })}
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => onSelectTab(tab)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(selectedTab && tabId) ? selectedTab?.content : 'Please select a tab' }
      </div>
    </>
  );
};
