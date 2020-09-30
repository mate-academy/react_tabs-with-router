import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ tabsId }: MatchProps) => {
  const currentTab = tabs.find(tab => tab.id === tabsId) || { content: '' };

  return (
    <>
      <h2>Tabs</h2>
      <ul>
        {tabs.map(tab => (
          <li>
            <NavLink
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <h3>{currentTab.content}</h3>
    </>
  );
};

export default TabsPage;
