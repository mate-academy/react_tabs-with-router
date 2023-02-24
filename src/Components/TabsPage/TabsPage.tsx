import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabsId = '' } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabsId) || null;

  return (
    <div className="section">
      <div className="container">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                className={classNames(
                  { 'is-active': tab.id === tabsId },
                )}
                key={tab.id}
              >
                <Link to={`../${tab.id}`}>
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
