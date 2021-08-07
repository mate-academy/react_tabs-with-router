/* eslint-disable object-curly-newline */
import React from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';

import './TabsPage.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = () => {
  const history = useHistory();
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  if (tabId !== undefined && !activeTab) {
    history.push('/tabs');
  }

  return (
    <>
      <div className="tabs-titles-row">
        {tabs.map(tab => (
          <NavLink
            className="tab-title"
            activeClassName="active"
            key={tab.id}
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>

      <div className="tab-content">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

export default TabsPage;
