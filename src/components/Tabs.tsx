import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';

type PropsTab = {
  currentTabId: string;
  tabs: Tab[];
  props: RouteComponentProps<Match>;
};

export const Tabs: React.FC<PropsTab> = ({ currentTabId, tabs, props: { match, history } }) => {
  const { tabId } = match.params;

  if (!tabId) {
    history.push(currentTabId);
  }

  if (!tabs.some(tab => tab.id === tabId)) {
    history.push(currentTabId);
  }

  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map(tab => {
          return (
            <NavLink to={tab.id} key={tab.id} className="nav-item nav-link">
              {tab.title}
            </NavLink>
          );
        })}
      </ul>
      <div className="tab-pane">
        {tabs.find(tab => tab.id === tabId)?.content}
      </div>
    </div>
  );
};
