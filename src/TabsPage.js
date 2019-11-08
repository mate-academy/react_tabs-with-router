import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tab from './Tab';

function TabsPage({ match: { path } }) {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <>
      <div>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            tab={tab}
          />
        ))}
      </div>
      <Route
        path={`${path}/:tabId`}
        render={({ match: { params: { tabId } } }) => (
          <p>
            {
              tabs.find(tab => tab.id === tabId)
                .content
            }
          </p>
        )}
      />
    </>
  );
}

TabsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }).isRequired,
};

export default TabsPage;
