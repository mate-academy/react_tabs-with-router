import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tabs = ({
  tabs, activeTab,
}) => (
  <>
    <div className="tabs">
      {
        tabs.map(tab => (
          <div className="button">
            <Link className="tabs__button" to={`/tabs/${tab.id}`}>
              {tab.title}
            </Link>
          </div>
        ))
      }
    </div>
    <div className="tabs__content">
      {activeTab ? tabs.find(tab => tab.id === activeTab)
        .content : <h6>You can choose any tab!</h6>}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  activeTab: propTypes.number.isRequired,
};

export default Tabs;
