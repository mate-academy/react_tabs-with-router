import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(currTab => currTab.id === tabId);

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <React.Fragment key={tab.id}>
          <NavLink
            to={`/tabs/${tab.id}`}
            className="tabs__link"
            activeClassName="tabs__link--active"
          >
            {tab.title}
          </NavLink>
        </React.Fragment>
      ))}
      {selectedTab ? (
        <p className="tabs__content">{selectedTab.content}</p>
      ) : (
        <p className="tabs__content">Please select a tab</p>
      )}
    </div>
  );
};
