import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams();

  const findTabItem = (id: string) => {
    return tabs.find(tab => tab.id === id);
  };

  const checkTabContent = (id: string) => {
    const tabItem = findTabItem(id);
    const tabContent = tabItem ? tabItem.content : 'No content';

    return tabContent;
  };

  const setActiveClassTab = (id: string) => {
    return classNames({
      'is-active': tabId === id,
    });
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={setActiveClassTab(tab.id)}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabId
          ? (checkTabContent(tabId))
          : ('Please select a tab')}
      </div>
    </>
  );
};
