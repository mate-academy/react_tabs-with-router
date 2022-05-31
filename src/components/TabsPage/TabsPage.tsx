import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './TabsPage.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { selectedTabId } = useParams<{ selectedTabId: string }>();
  const selectedContent = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <div className="tabs">
      <ul className="tabs__links">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__list"
          >
            <NavLink
              to={`/tabs/${tab.id}`}
              className={({ isActive }) => (
                isActive ? 'tabs__link tabs__link--active' : 'tabs__link')}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="tabs__content">
        {selectedContent ? (
          <p>
            {selectedContent.content}
          </p>
        ) : (
          <p>
            Please select a Tab...
          </p>
        )}
      </div>
    </div>
  );
};
