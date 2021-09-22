import React from "react";
import cn from 'classnames';
import { useParams, NavLink } from "react-router-dom";

import './TabsPage.scss';

interface Props {
  tabs: Tab[],
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId: selectedTabId } = useParams<{ tabId: string }>();

  const content = tabs.find(({ id }) => id === selectedTabId)?.content;

  return (
    <div className="container">
      <h1>Tabs page</h1>

      <div className="tabs">
          {tabs.map(({ id, title }) => (
            <button
              key={id}
              className={cn(
                'button',
                {active: id === selectedTabId},
                )}
            >
              <NavLink
                className="tab-link"
                activeClassName="activeLink"
                to={`/tabs/${id}`}
              >
                {title}
              </NavLink>
            </button>
          ))}

        <h1 className="content">
          {content ? (content) : ('Please select a tab')}
        </h1>
      </div>
    </div>
  );
};
