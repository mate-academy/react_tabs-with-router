import React, { FC } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { tabs } from '../constants/constants';
import { Content } from './Content';
import './Tabs.css';

interface MatchParams {
  tabsId: string;
}

const Tabs: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { tabsId } = match.params;
  const contentTab = tabs.find(tab => tab.id === tabsId);

  return (
    <>
      <h1>Tabs</h1>
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={`/tabs/${tab.id}`}
          className="button__heading"
          activeClassName="button__heading--active"
        >
          {tab.title}
        </NavLink>
      ))}
      {contentTab && <Content tab={contentTab} />}
    </>
  );
};

export default Tabs;
