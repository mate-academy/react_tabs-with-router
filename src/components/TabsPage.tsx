import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { tabs } from '../utils/constants';
import { Tab } from './Tab';

interface MatchParams {
  tabId: string;
}
export const TabsPage: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const tabContent = tabs.find(tab => tab.id === match.params.tabId);

  return (
    <>
      <div className="navbar is-light">
        {tabs.map(tab => (
          <Link
            className="navbar-item"
            key={tab.id}
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </Link>
        ))}
      </div>
      {tabContent && <Tab tab={tabContent} />}
    </>
  );
};
