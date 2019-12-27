import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tabs = ({ tabs }) => (
  <React.Fragment>
    <h2>Tabs</h2>

    <div className="tab">
      <div className="tab_buttons">
        {tabs.map(item => (
          <NavLink
            className="tab__link"
            activeClassName="tab__link--active"
            to={`/tabs/${item.id}`}
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))}
      </div>

      <div>
        {tabs.map(item => (
          <Route
            path={`/tabs/${item.id}`}
            key={item.id}
            render={() => (
              <span>{item.content}</span>
            )}
          />
        ))}
      </div>
    </div>
  </React.Fragment>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
