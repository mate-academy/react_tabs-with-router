import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tabs = ({ tabs, id }) => (
  <>
    <h1>Tabs</h1>
    <main className="tabs-container">
      <ul className="tabs-nav">
        {tabs.map(tabItem => (
          <li
            key={Date.now() * Math.random()}
            className={
              tabItem.id === id ? 'tab-item tab-item--selected' : 'tab-item'
            }
          >
            <Link to={`/tabs/${tabItem.id}`}>{tabItem.title}</Link>
          </li>
        ))}
      </ul>
      {tabs
        .filter(item => item.id === id)
        .map(item => (
          <div key={item.id} className="tab-content">
            <h4 className="content-item">
              {id}
            </h4>
            {item.content}
          </div>
        ))}
    </main>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
};

Tabs.defaultProps = {
  id: '',
};

export default Tabs;
