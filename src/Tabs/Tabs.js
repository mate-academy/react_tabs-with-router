import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import Tab from '../Tab/Tab';

const Tabs = ({ tabs, match }) => (
  <div>
    <nav>
      <ul className="nav">
        {tabs.map(tab => (
          <li className="nav-item" key={tab.id}>
            <NavLink
              className="nav-link"
              to={`${match.url}/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <div className="tab-content">
      <Switch>
        {tabs.map(tab => (
          <Route
            path={`${match.url}/${tab.id}`}
            key={tab.id}
            render={() => (
              <Tab tab={tab} />
            )}
          />
        ))}
      </Switch>
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
export default Tabs;
