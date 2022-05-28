import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './TabPage.scss';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const searchTab = tabs.find((tab) => tab.id === tabId);

  return (
    <div className="tabs">

      <ul className="tabs__list">
        {tabs.map((tab) => {
          return (
            <li key={tab.id} className="tabs__item">
              <NavLink
                to={`/tabs/${tab.id}`}
                className="tabs__link"
                activeClassName="tabs__link-active"
              >
                {tab.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      {searchTab && <p className="tabs__text">{searchTab.content}</p>}
      {!searchTab || !tabId ? <h2>Please select a tab</h2> : ''}
    </div>
  );
};
