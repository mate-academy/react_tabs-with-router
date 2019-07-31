import React from 'react';
import PropTypes from 'prop-types';
import { PropTypes as RouterPropTypes } from 'react-router';
import { Route, Link } from 'react-router-dom';

const Tab = ({
  tab,
  onTabSelected,
  selectedTab,
  match,
}) => (
  <li className="tab">
    <Link
      to={`${match.path}/${tab.id}`}
      exact
      activeClassName="selected"
      className="tab__title"
      onClick={() => onTabSelected(tab.id)}
    >
      {tab.title}
    </Link>
    {selectedTab === tab.id
      ? (
        <Route
          path={`${match.path}/${tab.id}`}
          render={() => (
            <p className="tab__content">
              {tab.content}
            </p>
          )}
        />
      ) : null
    }
  </li>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  match: RouterPropTypes.match.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export default Tab;
