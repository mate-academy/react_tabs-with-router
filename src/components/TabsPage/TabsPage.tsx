import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Pros = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Pros> = ({ tabs }) => {
  const { id } = useParams();
  const selectedTab = tabs.find(tab => tab.id === id);

  return (
    <div>
      <h1 className="title">Tabs Page</h1>

      <nav className="navbar">
        <div className="navbar-brand">
          {tabs.map(tab => (
            <NavLink
              key={tab.id}
              to={`/tabs/${tab.id}`}
              className={({ isActive }) => classNames(
                'navbar-item is-tab', { 'is-active': isActive },
              )}
            >
              {tab.title}
            </NavLink>
          ))}
        </div>
      </nav>

      <div>
        <p className="mt-3">
          {selectedTab ? (
            selectedTab.content
          ) : (
            'Please select a tab'
          )}
        </p>
      </div>
    </div>
  );
};
