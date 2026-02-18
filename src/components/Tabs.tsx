import React, { useState } from 'react';
import classNames from 'classnames';
import { getSelectedTab } from './../functions';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';

// type Props = {
//   tabs: [Tab, ...Tab[]];
//   activeTabId: string;
//   onTabSelected: Tab;
// };

const NOTIFICATION = 'Please select a tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  // const { tabId } = useParams();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const id = event.currentTarget.id;

    setSelectedTab(getSelectedTab(tabs, id));
  }

  const selectedId = selectedTab ? selectedTab.id : 0;
  const content = selectedTab ? selectedTab.content : NOTIFICATION;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === selectedId })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to="/tabs"
                // to="/tabs/tab.id"
                data-cy="TabLink"
                id={tab.id}
                onClick={event => handleClick(event)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
