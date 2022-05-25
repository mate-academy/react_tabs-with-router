import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './TabPage.scss';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const search = tabs.find(tab => tab.id === tabId);

  if (!tabId || !search) {
    return <p className="Tab__message title is-2">Please select a tab</p>;
  }

  return (
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
          <p className="Tab__content">{tabId === tab.id ? tab.content : ''}</p>
        </li>
      ))}
    </ul>
  );
};
