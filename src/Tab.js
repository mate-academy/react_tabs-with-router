import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

const Tab = ({ tab, match, changeCurrentTabId }) => (
  <button
    type="button"
    onClick={() => changeCurrentTabId(tab.id)}
  >
    <NavLink to={`${match.path}/${tab.id}`}>
      {tab.title}
    </NavLink>
  </button>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  changeCurrentTabId: PropTypes.func.isRequired,
};

export default withRouter(Tab);
