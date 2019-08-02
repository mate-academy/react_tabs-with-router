import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';

const Tabs = ({ tabs, tabId }) => {
  console.log(tabId)

  return (
    <section>
        <div className="tabButtons">
          {tabs.map(tab => (
            <div key={tab.id}>
              <NavLink
                to={`/tabs/${tab.id}`}
                activeClassName="active-nav"
                className="Button"
              >
                {tab.title}
              </NavLink>
            </div>
          ))}
        </div>
        <Tab currentTab={tabId ? tabs.find(tab => tab.id === tabId) : ''} />
    </section>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tabs;
