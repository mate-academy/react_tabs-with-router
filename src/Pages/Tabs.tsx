import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId = 0 } = useParams();
  const selectedTab = tabs.find((tab) => tabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={
                  classNames(tabId === tab.id ? 'is-active' : '')
                }
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
    </>
  );
};
