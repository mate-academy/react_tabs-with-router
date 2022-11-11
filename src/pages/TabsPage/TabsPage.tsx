import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">
        Tabs page
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
              data-cy="Tab"
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
