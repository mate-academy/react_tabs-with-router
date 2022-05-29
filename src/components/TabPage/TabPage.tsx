import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './TabPage.scss';

type Props = {
  tabs: Tab[];
};

export const TabPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTabButton = tabs.find(tab => tab.id === tabId);

  return (
    <div className="Tab">
      <h2 className="Tab__title is-2">
        {!tabId || !activeTabButton ? 'Please select a tab' : ''}
      </h2>
      <ul className="Tab__list">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className="button"
              activeClassName="is-active"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {activeTabButton && (
        <p className="Tab__content">
          {activeTabButton.content}
        </p>
      )}
    </div>
  );
};
