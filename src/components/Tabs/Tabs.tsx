import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  id: string;
};

export const Tabs: React.FC<Props> = ({ tabs, id }) => {
  const activeTab = tabs.find(tab => (tab.id === id));

  return (
    <section className="section">
      <div className="container">
        <h1 className="header">
          React Tabs
        </h1>
        <ul className="tabs">
          {tabs.map(tab => (
            <li className="tab col s3" key={tab.id}>
              <NavLink
                to={`/tabs/${tab.id}`}
                className="orange-text"
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <article>
          <h2 className="header">
            {activeTab && activeTab.title}
          </h2>
          {activeTab && activeTab.content}
        </article>
      </div>
    </section>
  );
};
