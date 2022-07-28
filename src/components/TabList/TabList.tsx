import React, { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import './TabList.scss';
import cn from 'classnames';

interface TabListProps {
  tabs: Tab[];
}

export const TabList: React.FC<TabListProps> = React.memo(({ tabs }) => {
  const match = useMatch('/tabs/:tabId');

  const selectedTabId = match?.params.tabId;
  const [selectedTab, setSelectedTab] = useState<Tab | null | undefined>(tabs
    .find((tab: Tab) => tab.id === selectedTabId));

  return (
    <>
      <h1 className="title is-1">
        {
          selectedTab
            ? (`Selected tab is: ${selectedTab?.title}`)
            : ('No tab is selected')
        }
      </h1>
      <ul className="TabList__list">
        {
          tabs?.map((tab: Tab) => (
            <li
              className={cn(
                'TabList__item',
                { 'TabList__item--isSelected': tab.id === selectedTabId },
              )}
              key={tab.id}
            >
              <Link
                className="TabList__link"
                to={`/tabs/${tab.id}`}
                onClick={() => {
                  setSelectedTab(tab);
                }}
              >
                <span>{tab.title}</span>
              </Link>
            </li>
          ))
        }
      </ul>

      <section className="TabList__Content">
        {
          selectedTab
            ? (<p>{selectedTab?.content}</p>)
            : (<p>Please select a tab</p>)
        }
      </section>
    </>
  );
});
