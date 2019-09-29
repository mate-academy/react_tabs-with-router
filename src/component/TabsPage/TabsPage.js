import React from 'react';
import Tab from '../Tab/Tab.js';
import PropTypes from 'prop-types';

const TabsPage = ({ match, tabs }) => {
  const activeTab = tabs.find(tab => tab.id === match.params.id);

  return (
    <>
      <ul className="nav tabs-nav">
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            title={tab.title}
            index={tab.id}
          />
        ))}
      </ul>

      <h2 className="text">
        {activeTab && activeTab.content}
      </h2>
    </>
  );
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default TabsPage;
