import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  currentTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, currentTabId }) => {
  const activeTab = useMemo(() => (
    tabs.find(tab => currentTabId === tab.id)
  ), [currentTabId, tabs]);

  return (
    <div className="card">
      <div className="card-tabs">
        <ul className="tabs tabs-fixed-width">
          {tabs.map(({ id, title }) => (
            <li key={id} className="tab">
              <NavLink
                to={`/tabs/${id}`}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {activeTab && (
        <div className="card-content">
          <p>{activeTab.content}</p>
        </div>
      )}
    </div>
  );
};
