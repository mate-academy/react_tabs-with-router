import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';

const Tabs = ({ tabs, match }) => (
  <div>
    <nav>
      <ul className="nav">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={`${match.url}/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <div>
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

const Tab = ({ tab }) => <div>{tab.content}</div>;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
};

export default Tabs;
