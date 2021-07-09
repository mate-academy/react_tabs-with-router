import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export function TabsPage({ match }) {
  const tabs = useMemo(() => [
    {
      id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
    },
    {
      id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
    },
    {
      id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
    },
  ], []);
  const { tabId } = match.params;
  const [selectedTab, setSelectedTab] = useState(tabId);

  useEffect(() => {
    setSelectedTab(tabs.find(obj => obj.id === tabId));
  }, [tabId, tabs]);

  return (
    <>
      <div>
        <h1>tabs Page</h1>
        {tabs.map(tab => (
          <NavLink to={`/tabs/${tab.id}`}>
            {tab.title}
          </NavLink>
        ))
      }
      </div>
      {selectedTab && <p>{selectedTab.content}</p>}
    </>
  );
}

TabsPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};
