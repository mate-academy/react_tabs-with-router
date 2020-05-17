import React from 'react';
import { NavLink } from 'react-router-dom';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
  match: Match;
};

export const Tabs: React.FC<Props> = ({ tabs, match }) => {
  const activeTab = tabs.find(tab => (tab.id === match.params.id));

  return (
    <>
      <h1>
        React Tabs
      </h1>
      <section className="tabs">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <li className="tabs__item" key={tab.id}>
              <NavLink
                to={`/tabs/${tab.id}`}
                className="tabs__link"
                activeClassName="tabs__link--active"
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
      <article>
        <h1>
          {activeTab && activeTab.title}
        </h1>
        {activeTab && activeTab.content}
      </article>
    </>
  );
};
