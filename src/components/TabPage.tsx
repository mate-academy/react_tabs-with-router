import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { tabs } from '../api/api';
import { Tab } from './Tab';

interface MatchParams {
  tabId: string;
}
export const TabPage: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const tabContent = tabs.find(tab => tab.id === match.params.tabId);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <ul className="navbar-nav mr-auto">
          {tabs.map(tab => (
            <li className="nav-item">
              <Link
                className="nav-link text-danger"
                key={tab.id}
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {tabContent && <Tab tab={tabContent} />}
    </>
  );
};
