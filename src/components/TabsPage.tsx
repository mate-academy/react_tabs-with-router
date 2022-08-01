import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <nav className="navbar-menu columns is-centered mb-6">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`/tabs/${tab.id}`}
            className={(navData) => (classNames(
              'navbar-item',
              { 'is-active': navData.isActive },
            ))}
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>

      {selectedTab?.id === undefined
        ? <p className="has-text-centered">Please select a tab</p>
        : <p className="has-text-centered">{selectedTab?.content}</p>}
    </>
  );
};
