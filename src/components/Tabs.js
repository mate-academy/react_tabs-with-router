import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';
import '../App.css';

const Tabs = ({ tabs, activeTabId }) => {
  const handleTabContent = tabsMap => (
    tabsMap.filter(tab => (
      tab.id === activeTabId
    )).map(tab => (tab.content))
  );

  return (
    <div>
      <h1 className="title">Tabs</h1>
      <div className="tabs">
        <nav className="tabs__nav">
          <ul
            className="tabs__list"
          >
            {tabs.map((tab, i) => (
              <li key={tab.id}>
                <NavLink
                  to={`/tabs/${tab.id}`}
                  activeClassName="tab__title--active"
                  className="tab__link"
                >
                  <div className="tab__title">{tab.title}</div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="tab__content">
          {handleTabContent(tabs)}
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  activeTabId: PropTypes.string,
};

Tabs.defaultProps = {
  activeTabId: '',
};

export default Tabs;
