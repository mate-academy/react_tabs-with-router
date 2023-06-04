import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId = '' } = useParams();
  const selectedTab = (id: string) => tabs.find(tab => tab.id === id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <Link
                to={`../${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab(tabId) ? (
          selectedTab(tabId)?.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
