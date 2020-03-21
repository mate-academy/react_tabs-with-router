import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { tabs } from '../../constants';
import { Content } from '../Content/Content';

interface MatchParams {
  tabsId: string;
}

export const Tabs: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const tabContent = tabs.find(tab => tab.id === match.params.tabsId);

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item">
            <Link
              to={`/tabs/${tab.id}`}
              key={tab.id}
              className="nav-link"
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
      {tabContent && <Content text={tabContent.content} />}
    </>
  );
};
