import React from 'react';
import { NavLink } from 'react-router-dom';

import './Tabs.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  match: Match;
};

export const Tabs: React.FC<Props> = ({ match }) => {
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
