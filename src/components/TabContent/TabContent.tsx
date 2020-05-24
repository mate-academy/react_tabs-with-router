import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { tabs } from '../data/tabsData';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface MatchParams {
  tabId: string;
}


const TabContent: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { tabId } = match.params;

  return <p>{tabs.find((tab: Tab) => tab.id === tabId)?.content}</p>;
};

export default withRouter(TabContent);
