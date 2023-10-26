import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabList: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tabId === tab.id ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>
                  {tab.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
