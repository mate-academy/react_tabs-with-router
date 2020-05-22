import React from 'react';
import { NavLink } from 'react-router-dom';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[];
  currentTabId: string;
};

const Tabs: React.FC<Props> = ({ tabs, currentTabId }) => {
  return (
    <>
      <h2>Tabs</h2>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              id={tab.id}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <p>
        {tabs.map(tab => (
          tab.id === currentTabId ? tab.content : ''
        ))}
      </p>
    </>
  );
};

export default Tabs;
