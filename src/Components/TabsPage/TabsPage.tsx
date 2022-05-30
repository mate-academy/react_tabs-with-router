import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="tabs">
      <h2>Tabs page</h2>

      <div>
        <ul className="tabs__list">
          {tabs.map(tab => (
            <li
              key={tab.id}
            >
              <NavLink
                className="tabs__list-item"
                to={`${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>
          {tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab'}
        </p>
      </div>
    </div>
  );
};
